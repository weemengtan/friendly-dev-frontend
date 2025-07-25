import type { Route } from "./+types";
// import { Form } from "react-router";

// export async function action({request}: Route.ActionArgs) {
//     const formData = await request.formData()
//     const name = formData.get('name')
//     const email = formData.get('email')
//     const subject = formData.get('subject')
//     const formMessage = formData.get('formMessage')

//     const errors: Record<string, string> = {};
//     if (!name) errors.name = 'Name is required';
//     if (!email) errors.email = 'Email is required';
//     if (typeof email !== 'string' || !email.includes('@')) errors.email = 'Email is not valid';
//     if (!subject) {
//         errors.subject = 'Subject is required';
//     }
//     if (!formMessage) {
//         errors.formMessage = 'Message is required';
//     }

//     if (Object.keys(errors).length > 0)
//         return {message: 'Invalid form submission', errors}
        
//     const data = {name, email, subject, formMessage}
//     return {message: 'form submitted successfully', data}

// }


const ContactPage = ({actionData}: Route.ComponentProps) => {
    // const errors = actionData?.errors || {}

    return (
        <div className='max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900'>
        <h2 className='text-3xl font-bold text-white mb-8 text-center'>
          📬 Contact Me
        </h2>

        {/* {actionData?.message && (
            <p className='mb-6 text-green-100 bg-green-800 p-4 rounded-lg text-center border-gray-500 shadow-md'>{actionData.message}</p>
        )} */}
  
        <form
          action='https://formspree.io/f/mqalqqee'
          method='post'
          className='space-y-6'
        >
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-300'
            >
              Full Name
            </label>
  
            <input
              type='text'
              id='name'
              name='name'
              className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
            />
            {/* {errors.name && (
                <p className='text-red-500 text-sm'>{errors.name}</p>
            )} */}
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-300'
            >
              Email
            </label>
  
            <input
              type='email'
              id='email'
              name='email'
              className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
            />
            {/* {errors.email && (
                <p className='text-red-500 text-sm'>{errors.email}</p>
            )} */}
          </div>
          <div>
            <label
              htmlFor='subject'
              className='block text-sm font-medium text-gray-300'
            >
              Subject
            </label>
  
            <input
              type='text'
              id='subject'
              name='subject'
              className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
            />
            {/* {errors.subject && (
                <p className='text-red-500 text-sm'>{errors.subject}</p>
            )} */}
          </div>
          <div>
            <label
              htmlFor='formMessage'
              className='block text-sm font-medium text-gray-300'
            >
              Message
            </label>
  
            <textarea
              id='formMessage'
              name='formMessage'
              className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
            />
            {/* {errors.formMessage && (
                <p className='text-red-500 text-sm'>{errors.formMessage}</p>
            )} */}
          </div>
  
          <button className='w-full bg-blue-600 text-white py-2 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer'>
            Send Message
          </button>
        </form>
      </div>
    );
};

export default ContactPage;