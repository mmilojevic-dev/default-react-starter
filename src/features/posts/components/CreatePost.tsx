import { PlusIcon } from 'lucide-react'
import * as z from 'zod'

import { Button, Spinner } from '@/components'
import { Form, FormDrawer, InputField, TextAreaField } from '@/components/Form'
import { createPostConfig } from '@/config'

import { CreatePostDTO, useCreatePost } from '../api/createPost'

const schema = z.object({
  title: z.string().min(1, 'Required'),
  body: z.string().min(1, 'Required')
})

export const CreatePost = () => {
  const createPostMutation = useCreatePost()

  return (
    <FormDrawer
      isDone={createPostMutation.isSuccess}
      triggerButton={
        <Button size="sm">
          <PlusIcon className="mr-2 size-4" />
          {createPostConfig.triggerButtonLabel}
        </Button>
      }
      title={createPostConfig.formDrawer.title}
      submitButton={
        <Button form="create-post" type="submit" size="sm">
          {createPostMutation.isPending && (
            <Spinner size="sm" className="mr-2 text-foreground" />
          )}
          {createPostConfig.formDrawer.confirmButtonLabel}
        </Button>
      }
    >
      <Form<CreatePostDTO['data'], typeof schema>
        id="create-post"
        onSubmit={async (values) => {
          await createPostMutation.mutateAsync({ data: values })
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <InputField
              placeholder={createPostConfig.formDrawer.postTitlePlaceholder}
              error={formState.errors['title']}
              registration={register('title')}
            />

            <TextAreaField
              placeholder={createPostConfig.formDrawer.postBodyPlaceholder}
              error={formState.errors['body']}
              registration={register('body')}
            />
          </>
        )}
      </Form>
    </FormDrawer>
  )
}
