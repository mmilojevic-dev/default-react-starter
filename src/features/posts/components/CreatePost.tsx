import { PlusIcon } from 'lucide-react'
import * as z from 'zod'

import { Button, Spinner } from '@/components'
import { Form, FormDrawer, InputField, TextAreaField } from '@/components/Form'
import { CREATE_POST } from '@/config'

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
          {CREATE_POST.TRIGGER_BUTTON_LABEL}
        </Button>
      }
      title={CREATE_POST.FORM_DRAWER.TITLE}
      submitButton={
        <Button form="create-post" type="submit" size="sm">
          {createPostMutation.isLoading && (
            <Spinner size="sm" className="mr-2 text-foreground" />
          )}
          {CREATE_POST.FORM_DRAWER.CONFIRM_BUTTON_LABEL}
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
              placeholder={CREATE_POST.FORM_DRAWER.POST_TITLE_PLACEHOLDER}
              error={formState.errors['title']}
              registration={register('title')}
            />

            <TextAreaField
              placeholder={CREATE_POST.FORM_DRAWER.POST_BODY_PLACEHOLDER}
              error={formState.errors['body']}
              registration={register('body')}
            />
          </>
        )}
      </Form>
    </FormDrawer>
  )
}
