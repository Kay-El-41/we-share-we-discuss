import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  Textarea,
  Input,
} from "@nextui-org/react";
import * as actions from "@/src/actions";

export default function TopicCreateForm() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create Topics</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={actions.createTopic}>
          <div className="flex w-80 flex-col gap-4 p-4">
            <h3 className="text-lg font-semibold">Create a Topic</h3>
            <Input
              label="Name"
              labelPlacement="outside"
              placeholder="Topic name"
            />
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topics"
            />
            <Button type="submit" color="primary" variant="flat">
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
