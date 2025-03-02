import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "../atoms/form";
import { Input } from "@/components/atoms/input";
import { Textarea } from "../atoms/textarea";
import { Button } from "@/components/atoms/button";

// Define the validation schema using Zod
const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters long." }),
    email: z
        .string()
        .email({ message: "Invalid email address." }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters long." }),
});

// Define the form's data type based on the schema
type ContactFormValues = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
    const { t } = useTranslation();

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    // Handle form submission
    const onSubmit = (data: ContactFormValues) => {
        console.log("Form submitted:", data);
        alert("Your message has been sent!");
        form.reset();
    };

    return (
        <section
            id="contact"
            className="container py-24 sm:py-32"
        >
            <div className="max-w-md mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">{t("contact.title")}</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name Field */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("contact.name_title")}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t("contact.name")} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Email Field */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("contact.email_title")}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t("contact.email")} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Message Field */}
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("contact.message_title")}</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder={t("contact.message")} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <Button type="submit" variant="default">
                                {t("contact.contact_btn")}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default ContactForm;