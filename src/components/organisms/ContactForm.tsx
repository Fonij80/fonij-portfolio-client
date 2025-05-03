import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { User, Mail, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Detect language direction changes
  useEffect(() => {
    const direction = i18n.dir(i18n.language);
    document.documentElement.dir = direction;
    setIsRTL(direction === "rtl");
  }, [i18n, i18n.language]);

  // Dynamic positioning classes
  const iconPosition = isRTL ? "right-3" : "left-3";
  const inputPadding = isRTL ? "pr-10" : "pl-10";
  const textAlignment = isRTL ? "text-right" : "text-left";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    // TODO: replace with your API call
    await new Promise((res) => setTimeout(res, 1000));
    toast.success("پیام شما ارسال شد!"); // Use toast instead of alert
    setName("");
    setEmail("");
    setMessage("");
    setSubmitting(false);
  };

  return (
    <Card className="max-w-md mx-auto shadow-xl rounded-2xl md:mt-40 mt-20">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          {t("contact_page.title")}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {t("contact_page.description")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User
              className={`absolute ${iconPosition} top-1/2 -translate-y-1/2 text-muted-foreground`}
            />
            <Input
              id="name"
              placeholder={t("contact_page.name_field")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={`${inputPadding} ${textAlignment}`}
            />
          </div>
          <div className="relative">
            <Mail
              className={`absolute ${iconPosition} top-1/2 -translate-y-1/2 text-muted-foreground`}
            />
            <Input
              id="email"
              type="email"
              placeholder={t("contact_page.email_field")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`${inputPadding} ${textAlignment}`}
            />
          </div>
          <div className="relative">
            <MessageSquare
              className={`absolute ${iconPosition} top-3 text-muted-foreground`}
            />
            <Textarea
              id="message"
              placeholder={t("contact_page.message_field")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={`${inputPadding} ${textAlignment} h-32 resize-none`}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition transform hover:scale-105"
            disabled={submitting}
          >
            {submitting
              ? t("contact_page.loading_btn")
              : t("contact_page.contact_btn")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
