"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const FormSchema = z.object({
	name: z.string({
    	required_error: "Please enter a name"
	}).min(2, {
    	message: "name must be more than 2 characters long"
	}).max(20, {
    	message: "name must be no longer than 20 characters"
	}),
	question1: z.string({
    	required_error: "Please select an option"
	})
})

export default function Quiz() {
	const { toast } = useToast();

	const form = useForm<z.infer<typeof FormSchema>>({
    	resolver: zodResolver(FormSchema)
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.question1 === "once-a-week" ||data.question1 === "few-times-a-week"  ) {
        toast({
            title: `Congratulations ${data.name}`,
            description: "You are not an addict",
        })
    } else {
        toast({
            title: `Oh no!! ${data.name}`,
            description: "Unfortunately you are an addict",
        })
    }
}


	return (
    	<Form {...form}>
        	<form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
            	<FormField
                	control={form.control}
                	name="name"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 1:</FormLabel>
                        	<FormDescription>What is your name?</FormDescription>
                            	<FormControl>
                                	<Input placeholder="your name here" {...field}/>
                            	</FormControl>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
            	<FormField
                	control={form.control}
                	name="question1"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 2:</FormLabel>
                        	<FormDescription>How often do you take these addictives?</FormDescription>
                        	<Select onValueChange={field.onChange} defaultValue={field.value}>
                            	<FormControl>
                                	<SelectTrigger>
                                    	<SelectValue placeholder="Please select an answer"/>
                                	</SelectTrigger>
                            	</FormControl>
                            	<SelectContent>
                                	<SelectItem value="once-a-week">Once a week</SelectItem>
                                	<SelectItem value="few-times-a-week">Few times a week</SelectItem>
                                	<SelectItem value="everyday">Everyday</SelectItem>
                            	</SelectContent>
                        	</Select>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
            	<Button type="submit">Submit</Button>
        	</form>
    	</Form>
	)
}
