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

export default function TopicCreateForm() {
  const [fromState, action] = useFormState(actions.createTopic, {
    errors: {},
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create Topics</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex w-80 flex-col gap-4 p-4">
            <h3 className="text-lg font-semibold">Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Topic name"
              isInvalid={!!fromState.errors.name}
              errorMessage={fromState.errors.name?.join(", ")}
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topics"
              isInvalid={!!fromState.errors.description}
              errorMessage={fromState.errors.description?.join(", ")}
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
