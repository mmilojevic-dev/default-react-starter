import { PlusIcon } from 'lucide-react'
import * as z from 'zod'

import { Button } from '@/components/Elements/Button'
import { Spinner } from '@/components/Elements/Spinner'
import { Form } from '@/components/Form/Form'
import { FormDrawer } from '@/components/Form/FormDrawer'
import { InputField } from '@/components/Form/InputField'
import { TextAreaField } from '@/components/Form/TextareaField'
import { createPostConfig } from '@/config'
import { CreatePostDTO, useCreatePost } from '@/features/posts/api/createPost'
import { withSuspense } from '@/hoc/withSuspense'

const schema = z.object({
  title: z.string().min(1, 'Required'),
  body: z.string().min(1, 'Required')
})

const CreatePost = () => {
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

export default withSuspense(CreatePost)
