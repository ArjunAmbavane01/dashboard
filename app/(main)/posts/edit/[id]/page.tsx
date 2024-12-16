'use client';

import BackButton from "@/components/BackButton";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormLabel,
    FormItem,
    FormMessage
} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posts from '@/data/posts';

const formSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    body: z.string().min(1, { message: 'Body is required' }),
    author: z.string().min(1, { message: 'Author is required' }),
    date: z.string().min(1, { message: 'Date is required' })
})

interface PostEditPageProps {
    params: {
        id: string;
    }
}

const PostEditPage = ({ params }: PostEditPageProps) => {
    const post = posts.find((post) => post.id === params.id);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: post?.title || '',
            body: post?.body || '',
            author: post?.author || '',
            date: post?.date || '',
        }
    })

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    }
    return (<div className="p-4">
        <BackButton text='Back to Posts' link="/posts" />
        <h3 className="text-2xl-mb-4">Edit Post</h3>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8">
<FormField
  control={form.control}
  name="title"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Title</FormLabel>
      <FormControl>
        <Input className="bg-slate-100 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white dark:bg-slate-500" placeholder="Enter Title" {...field} />
      </FormControl>
      
      <FormMessage />
    </FormItem>
  )}
/>
        </form>
        </Form>
    </div>);
}

export default PostEditPage;