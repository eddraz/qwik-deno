import { component$, useSignal } from "@builder.io/qwik";
import { Form, routeAction$, type DocumentHead } from "@builder.io/qwik-city";

export const useAddUser = routeAction$(async (data, request) => {
  request.cookie.set("id", "data.id");

  return {
    success: true,
    data,
  };
});

export default component$(() => {
  const action = useAddUser();
  const id = useSignal<string>(Date.now().toString());

  return (
    <>
      {action.value?.success && <>{JSON.stringify(action.value.data)}</>}

      <Form action={action}>
        <input
          type="text"
          name="id"
          class="border-2"
          placeholder="id"
          bind:value={id}
        />
        <input
          type="text"
          name="displayName"
          class="border-2"
          placeholder="nombre"
        />
        <input type="text" name="email" class="border-2" placeholder="email" />

        <button type="submit" class="mx-2 rounded-md bg-green-300">
          Submit!
        </button>
      </Form>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
