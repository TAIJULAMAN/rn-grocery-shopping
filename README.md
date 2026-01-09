# Grocery Shopping - React Native App

A modern, feature-rich grocery shopping application built with React Native, Expo, and TypeScript. This app provides a seamless user experience for browsing products, managing a cart, and processing payments, along with a complete user authentication and profile management system.

## 📱 Features

### 🛍️ Shopping Experience
*   **Home Dashboard**: Interactive banner, recommended products, and exclusive deals.
*   **Category Browsing**: Dedicated category pages with dynamic product listings.
*   **Wishlist**: Save favorite items for later.
*   **Cart Management**: Add items, adjust quantities, and view cost breakdowns.

### 💳 Checkout & Payment
*   **Checkout Flow**: Streamlined process for selecting delivery options.
*   **Payment Integration**: Secure mock payment form with validation.
*   **Success Feedback**: Custom modal confirmation upon successful transaction.

### 👤 User Account
*   **Authentication**: Complete Sign In and Sign Up flows.
*   **Password Recovery**: 3-step process (Email -> OTP -> Reset Password).
*   **Profile Management**: Edit profile details and change password.
*   **Order History**: View past orders and their status (Delivered/Cancelled).

## 🛠️ Tech Stack

*   **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
*   **Styling**: React Native `StyleSheet`
*   **Icons**: `@expo/vector-icons`
*   **Storage**: `@react-native-async-storage/async-storage`

## 📂 Project Structure

```
my-app/
├── app/
│   ├── (tabs)/                 # Bottom tab navigation
│   │   ├── _layout.tsx         # Tab configuration
│   │   ├── index.tsx           # Home screen
│   │   ├── categories.tsx      # Categories screen
│   │   ├── favourite.tsx       # Wishlist screen
│   │   └── more.tsx            # Settings/Menu screen
│   ├── auth/                   # Authentication screens
│   │   ├── sign-in.tsx
│   │   ├── sign-up.tsx
│   │   ├── forgot-password.tsx
│   │   ├── verify-otp.tsx
│   │   └── reset-password.tsx
│   ├── category/               # Dynamic routes
│   │   └── [id].tsx            # Category Details
│   ├── orders/                 # Order history
│   │   └── index.tsx
│   ├── profile/                # User profile
│   │   ├── edit.tsx
│   │   └── change-password.tsx
│   ├── _layout.tsx             # Root layout & Navigation config
│   ├── cart.tsx                # Shopping Cart
│   ├── checkout.tsx            # Checkout
│   ├── index.tsx               # Entry point (Splash/Auth check)
│   ├── onboarding.tsx          # Onboarding flow
│   └── payment.tsx             # Payment processing
├── components/                 # Reusable UI components
│   ├── HomeBanner.tsx
│   ├── HomeDeals.tsx
│   ├── HomeRecommended.tsx
│   ├── OnboardingSlide.tsx
│   ├── OnboardingStepOne.tsx
│   ├── OnboardingStepTwo.tsx
│   └── SplashScreen.tsx
├── assets/                     # Static assets
│   ├── images/
│   └── fonts/
├── constants/                  # App constants (Colors, etc.)
├── hooks/                      # Custom React hooks
├── app.json                    # Expo configuration
└── package.json                # Dependencies
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

