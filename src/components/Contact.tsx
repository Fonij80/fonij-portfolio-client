import React from "react";
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
} from "./ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "@/components/ui/button";

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

export const Contact = () => {
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
        form.reset(); // Clear the form after submission
    };

    return (
        <section
            id="contact"
            className="container py-24 sm:py-32"
        >
            <div className="max-w-md mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name Field */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Name" {...field} />
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
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Email" {...field} />
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
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Your Message" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <Button type="submit" variant="default">
                            Send Message
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
}
