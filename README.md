
# 🤖 Imaginify

An AI image SaaS platform that excels in image processing capabilities, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal. This project can be a guide for your next AI image tool and a boost to your portfolio.


## ⚙️ Tech Stack

- Next.js
- TypeScript
- MongoDB
- Clerk
- Cloudinary
- Stripe
- Shadcn
- TailwindCSS
## Features

👉 Authentication and Authorization: Secure user access with registration, login, and route protection.

👉 Community Image Showcase: Explore user transformations with easy navigation using pagination

👉 Advanced Image Search: Find images by content or objects present inside the image quickly and accurately

👉 Image Restoration: Revive old or damaged images effortlessly

👉 Image Recoloring: Customize images by replacing objects with desired colors easily

👉 Image Generative Fill: Fill in missing areas of images seamlessly

👉 Object Removal: Clean up images by removing unwanted objects with precision

👉 Background Removal: Extract objects from backgrounds with ease

👉 Download Transformed Images: Save and share AI-transformed images conveniently

👉 Transformed Image Details: View details of transformations for each image

👉 Transformation Management: Control over deletion and updates of transformations

👉 Credits System: Earn or purchase credits for image transformations

👉 Responsive UI/UX: A seamless experience across devices with a user-friendly interface 

and many more, including code architecture and reusability
## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Ahtasham-ul-haq/imaginify.git
cd imaginify
```

**Installation**

Install the project dependencies using npm:

```bash
npm run dev
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/), and [Cloudinary](https://cloudinary.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
