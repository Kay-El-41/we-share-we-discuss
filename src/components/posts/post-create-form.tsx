"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  Textarea,
  Input,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import * as actions from "@/src/actions";
import FormButton from "@/src/components/common/form-button";

type PostCreateFormProps = {
  slug: string;
};

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [fromState, action] = useFormState(
    actions.createPost.bind(null, slug),
    {
      errors: {},
    }
  );

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex w-80 flex-col gap-4 p-4">
            <h3 className="text-lg font-semibold">Create a Post</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Post Title"
              isInvalid={!!fromState.errors.title}
              errorMessage={fromState.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Describe your content"
              isInvalid={!!fromState.errors.content}
              errorMessage={fromState.errors.content?.join(", ")}
            />
            {fromState.errors._form ? (
              <p className="rounded-xl border border-red-400 bg-red-200 p-2">
                {fromState.errors._form?.join(", ")}
              </p>
            ) : null}
            <FormButton color="primary" variant="flat">
              Create
            </FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
