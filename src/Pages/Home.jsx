import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Header.jsx mein "Add Post" ka link bhi yehi hai
const ADD_POST_PATH = '/add-post/:userId'

const features = [
  {
    title: 'Write with a full editor',
    text: 'Give your post a title, add a cover image and write the content in a text editor made for long posts.',
  },
  {
    title: 'Edit or delete anytime',
    text: 'Open any of your posts to update it, or remove it when you no longer want it.',
  },
  {
    title: 'Choose who sees it',
    text: 'Set a post to active and it appears in All Posts for every reader. Keep it inactive while you are still working on it.',
  },
  {
    title: 'Read what others write',
    text: 'After you sign in, All Posts shows every active post from every writer, and My Posts shows your own.',
  },
]

const steps = [
  {
    title: 'Create your account',
    text: 'Enter your name, email and a password.',
  },
  {
    title: 'Write your first post',
    text: 'Open Add Post, then add a title, a cover image and your content.',
  },
  {
    title: 'Post it',
    text: 'Set the status to active and press Post Now. Your post shows up in All Posts.',
  },
]

const focus =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400'
const primaryBtn = `rounded px-6 py-3 font-semibold text-white bg-amber-600 hover:bg-amber-700 transition shadow-lg shadow-amber-600/50 ${focus}`
const secondaryBtn = `rounded px-6 py-3 font-semibold text-zinc-100 border border-zinc-500 hover:border-amber-500 hover:text-amber-500 transition ${focus}`

function Home() {
  const isLoggedIn = useSelector((state) => state.auth.status)

  return (
    <div className='text-zinc-100'>
      {/* Hero: App.jsx ki autumn background image is ke peeche nazar aati hai */}
      <section
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(9,9,11,0.88), rgba(9,9,11,0.6) 55%, rgba(9,9,11,0.1))',
        }}
      >
        <div className='mx-auto max-w-6xl px-6 py-24 md:py-36'>
          <h1 className='max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl'>
            Write it down. Publish it. Let people read it.
          </h1>
          <p className='mt-6 max-w-xl text-lg leading-relaxed text-zinc-300'>
            The Bloger&rsquo;s is a place to write blog posts and share them
            with readers. Write your post with a cover image and share it in a
            few minutes.
          </p>
          <div className='mt-10 flex flex-wrap gap-4'>
            {isLoggedIn ? (
              <>
                <Link to='/all-post' className={primaryBtn}>
                  Read all posts
                </Link>
                <Link to='/my-post' className={secondaryBtn}>
                  My posts
                </Link>
              </>
            ) : (
              <>
                <Link to='/signup-page' className={primaryBtn}>
                  Create your account
                </Link>
                <Link to='/signin-page' className={secondaryBtn}>
                  Sign in
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* About the app */}
      <section className='bg-zinc-900/85 backdrop-blur-md'>
        <div className='mx-auto max-w-6xl px-6 py-20'>
          <h2 className='max-w-2xl font-serif text-3xl font-bold leading-snug text-amber-500 md:text-4xl'>
            A simple home for your writing
          </h2>
          <p className='mt-4 max-w-xl leading-relaxed text-zinc-400'>
            No clutter and no setup. You write, and The Bloger&rsquo;s takes
            care of showing it to readers.
          </p>
          <div className='mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2'>
            {features.map((item) => (
              <div
                key={item.title}
                className='border-l-2 border-amber-500/70 pl-5'
              >
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='mt-2 max-w-md leading-relaxed text-zinc-400'>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps: yeh sach mein ek sequence hai, is liye numbers hain */}
      <section className='border-y border-zinc-800 bg-zinc-950/85 backdrop-blur-md'>
        <div className='mx-auto max-w-6xl px-6 py-20'>
          <h2 className='font-serif text-3xl font-bold md:text-4xl'>
            Start in three steps
          </h2>
          <ol className='mt-12 grid gap-10 md:grid-cols-3'>
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className='font-serif text-5xl font-bold text-amber-500'>
                  {index + 1}
                </span>
                <h3 className='mt-3 text-lg font-semibold'>{step.title}</h3>
                <p className='mt-2 max-w-xs leading-relaxed text-zinc-400'>
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing call to action */}
      <section className='bg-zinc-900/85 backdrop-blur-md'>
        <div className='mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center'>
          <h2 className='max-w-xl font-serif text-3xl font-bold leading-snug md:text-4xl'>
            {isLoggedIn
              ? 'Have something to say? Write your next post.'
              : 'Your first post is a few minutes away.'}
          </h2>
          {isLoggedIn ? (
            <Link to={ADD_POST_PATH} className={primaryBtn}>
              Add post
            </Link>
          ) : (
            <Link to='/signup-page' className={primaryBtn}>
              Create your account
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
