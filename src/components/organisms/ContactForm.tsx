import React, { useState } from "react";
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

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    // TODO: replace with your API call
    await new Promise((res) => setTimeout(res, 1000));
    alert("پیام شما ارسال شد!");
    setName("");
    setEmail("");
    setMessage("");
    setSubmitting(false);
  };

  return (
    <Card className="max-w-md mx-auto mt-10 shadow-xl rounded-2xl bg-white dark:bg-gray-800">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          هر چی دل تنگت میخواد بگو!
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          خوشحال می‌شم پیامت رو دریافت کنم.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="name"
              placeholder="اسمت"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="pl-10"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="ایمیلت"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-muted-foreground" />
            <Textarea
              id="message"
              placeholder="پیامت"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="pl-10 h-32 resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition transform hover:scale-105"
            disabled={submitting}
          >
            {submitting ? "در حال ارسال..." : "بفرستش بره!"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
