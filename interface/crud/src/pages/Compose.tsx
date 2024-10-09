import React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type Input = z.infer<typeof registerSchema>;

const Compose = () => {
  const [file, setFile] = React.useState<any>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formStep, setFormStep] = React.useState(0);
  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      title: "",
      authorId: "",
      author: "",
      description: "",
      content_text: "",
      content_type: "",
      thumbnail: file,
    },
  });
  async function onSubmit(data: Input) {
    const date = new Date();
    try {
      if (data.authorId !== "1234567") {
        toast({
          title: "Author ID not valid",
          variant: "destructive",
        });
        return;
      }
      const article = Object.assign({}, data, {
        date: date,
      });
      await postArticle(article);
      navigate("/articles");
    } catch (error) {
      throw error;
    }
  }
  async function postArticle(data: Object) {
    return await axios
      .post("http://localhost:8000/api/v1/news/create", data)
      .then(() => {
        toast({
          title: "Article Created Successfully!",
          variant: "success",
        });
      });
  }
  return (
    <div className="w-full flex-1 h-full">
      <div className="w-full flex items-center justify-center h-full">
        <Card className="w-full lg:w-2/5">
          <CardHeader>
            <CardTitle>Write Article</CardTitle>
            <CardDescription>
              Publish your new article in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Content goes here */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 relative overflow-x-hidden p-1"
              >
                {/* title */}
                <motion.div
                  className={cn("space-y-3", {
                    hidden: formStep == 1 || formStep == 2,
                  })}
                  animate={{
                    translateX: `-${formStep * 100}%`,
                  }}
                  transition={{
                    ease: "easeInOut",
                  }}
                >
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter article title" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your article's title.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* category */}
                  <FormField
                    control={form.control}
                    name="content_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a verified category to display" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Technology">
                              Technology
                            </SelectItem>
                            <SelectItem value="Politics">Politics</SelectItem>
                            <SelectItem value="Sports">Sports</SelectItem>
                            <SelectItem value="Business">Business</SelectItem>
                            <SelectItem value="Culture">Culture</SelectItem>
                            <SelectItem value="Education">Education</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Select the specific article category
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* description */}
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter description"
                            {...field}
                            type="text"
                          />
                        </FormControl>
                        <FormDescription>
                          This is a small description of your article
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                <motion.div
                  className={cn("space-y-3", {
                    hidden: formStep == 0 || formStep == 2,
                  })}
                  animate={{
                    translateX: `${100 - formStep * 100}%`,
                  }}
                  transition={{
                    ease: "easeInOut",
                  }}
                >
                  {/* content text */}
                  <FormField
                    control={form.control}
                    name="content_text"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content Text</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write your article"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          This is a small description of your article
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="thumbnail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Thumbnail</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            {...field}
                            onChange={handleFileChange}
                            value={file}
                          />
                        </FormControl>
                        <FormDescription>
                          This is the article's thumbnail
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                <motion.div
                  className={cn("space-y-3", {
                    hidden: formStep == 0 || formStep == 1,
                  })}
                  animate={{
                    translateX: `${200 - formStep * 100}%`,
                  }}
                  transition={{
                    ease: "easeInOut",
                  }}
                >
                  {/* author's name */}
                  <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Author's Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter author's name"
                            {...field}
                            type="text"
                            // onChange={handleAuthors}
                          />
                        </FormControl>
                        <FormDescription>
                          This is your public author name
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* author's id */}
                  <FormField
                    control={form.control}
                    name="authorId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Author's ID</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter author's ID"
                            {...field}
                            type="password"
                          />
                        </FormControl>
                        <FormDescription>Enter your author ID</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                <div className="flex gap-2">
                  <Button
                    type="submit"
                    className={cn({
                      hidden: formStep == 0 || formStep == 1,
                    })}
                    variant={"primary"}
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    variant={"outline"}
                    className={cn({
                      hidden: formStep == 0,
                    })}
                    onClick={() => {
                      setFormStep(formStep - 1);
                    }}
                  >
                    Go Back
                  </Button>
                  <Button
                    type="button"
                    variant={"outline"}
                    className={cn({
                      hidden: formStep == 2,
                    })}
                    onClick={() => {
                      //validate
                      form.trigger(["title", "description", "content_type"]);
                      const titleState = form.getFieldState("title");
                      const descState = form.getFieldState("description");
                      const content_typeState =
                        form.getFieldState("content_type");
                      const content_textState =
                        form.getFieldState("content_text");
                      const authorIDState = form.getFieldState("authorId");
                      const authorNameState = form.getFieldState("author");

                      if (!titleState.isDirty || titleState.invalid) return;
                      if (!descState.isDirty || descState.invalid) return;
                      if (
                        !content_typeState.isDirty ||
                        content_typeState.invalid
                      )
                        return;

                      if (formStep == 1) {
                        form.trigger(["content_text"]);
                        if (
                          !content_textState.isDirty ||
                          content_textState.invalid
                        )
                          return;
                      }
                      if (formStep == 2) {
                        form.trigger(["authorId", "author"]);
                        if (!authorIDState.isDirty || authorIDState.invalid)
                          return;
                        if (!authorNameState.isDirty || authorNameState.invalid)
                          return;
                      }
                      setFormStep(formStep + 1);
                    }}
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Compose;
