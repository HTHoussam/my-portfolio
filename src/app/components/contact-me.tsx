"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import contactMeSchema, { ContactMeSchemaType } from "@/lib/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";
import { emailme } from "../action";
const ContactMe = () => {
  const { toast } = useToast();

  const form = useForm<ContactMeSchemaType>({
    defaultValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },
    mode: "onChange",
    resolver: zodResolver(contactMeSchema),
  });
  async function onSubmit(data: ContactMeSchemaType) {
    try {
      await emailme(data);
      toast({
        description: "Your message has been sent.",
      });
    } catch (error) {
      toast({
        description: "Failed to send email, check you email and try again.",
      });
      console.error("Failed to send email:", error);
    }
  }

  return (
    <div className="flex flex-col mt-8" id="message__me">
      <h3 className="text-4xl font-bold mb-6 text-left capitalize bg-gradient-to-r from-primary to-slate-50 bg-clip-text text-transparent">
        Message me
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, (error) => {
            console.log("error", error);
          })}
        >
          <div className="flex flex-col w-full items-center">
            <div className="grid grid-cols-1 gap-4 lg:gap-8 w-full max-w-2xl">
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel className="capitalize">name</FormLabel>
                      <FormControl>
                        <Input
                          className="text-muted-foreground"
                          placeholder="john doe"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel className="capitalize">email</FormLabel>
                      <FormControl>
                        <Input
                          className="text-muted-foreground"
                          placeholder="john@doe.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel className="capitalize">subject</FormLabel>
                      <FormControl>
                        <Input
                          className="text-muted-foreground"
                          placeholder="subject"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel className="capitalize">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="text-muted-foreground"
                          placeholder="message here ..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Button type="submit" variant={"outline"}>
                  Send message
                  <SendHorizontal className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default ContactMe;
