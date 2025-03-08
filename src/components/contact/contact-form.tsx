"use client"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"


import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { SendHorizonal } from "lucide-react";
import { formSchema } from "@/lib/form-schema";
import { send } from "@/lib/email";

export const ContactForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        send(values);
    }


    return (
        <div className="w-8/12">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4">
                    <div className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="gap-y-1">
                                    <FormControl>
                                        <Input
                                            className="text-sm text-neutral-600 py-2 placeholder:text-sm h-12 border border-neutral-800 focus-visible:none"
                                            placeholder="Enter your Name"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="gap-y-1">

                                    <FormControl>
                                        <Input
                                            className="text-sm h-12 text-neutral-600 py-2  placeholder:text-sm border border-neutral-800 focus-visible:none"
                                            placeholder="Enter your Email"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="gap-y-1">

                                    <FormControl>
                                        <Textarea
                                            className="text-sm  py-2  placeholder:text-sm border border-neutral-800 text-neutral-900 focus-visible:none min-h-20"
                                            {...field}
                                            placeholder="Tell me about your Project"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                    </div>
                    <button type="submit" className="flex items-center justify-center gap-x-2 text-lg px-4 py-2 rounded-md bg-neutral-800 hover:bg-neutral-800/80 dark:text-neutral-900 dark:bg-neutral-100  dark:hover:bg-neutral-300 text-neutral-200 w-full xl:w-3/12 xl:text-2xl">
                        <p className="font-normal text-sm">Submit</p>
                        <SendHorizonal className="size-4" />
                    </button>
                </form>
            </Form>
        </div>
    );
}