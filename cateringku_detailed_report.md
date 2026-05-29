# Table of Contents
Catering Application Analysis and Design (Cateringku)

Chapter 1 Introduction
1.1 Background of the Study
1.2 Problem Statement
1.3 Objectives of the System
1.4 Scope of the System
1.5 Methodology

Chapter 2 User Analysis
2.1 User Persona – Customer (Event Organizer / Individual)
2.2 User Persona – Catering Provider (Mitra Catering)
2.3 User Journey / User Story
2.4 Problem Identification

Chapter 3 Existing Business Process
3.1 Current Catering Order Process
3.2 Existing Marketing Process for Caterers
3.3 Problems in the Current Process
3.4 Business Process Analysis

Chapter 4 System Design Thinking Approach
4.1 Empathize Stage
4.2 Define Stage
4.3 Ideate Stage
4.4 Proposed System Features

Chapter 5 Proposed Business Process
5.1 Provider Registration & Package Management
5.2 Catering Search & Order Process by User
5.3 Order Fulfillment Process
5.4 Payment & Tracking Process

Chapter 6 System Requirements
6.1 Functional Requirements
6.1.1 User Registration and Login
6.1.2 Catering Package Listing
6.1.3 Catering Searching & Filtering
6.1.4 Order & Checkout Process
6.1.5 Order Management & Status Tracking
6.1.6 Promo & Discount System
6.1.7 Rating and Review System

Chapter 7 Non-Functional Requirements
7.1 Security
7.2 Performance
7.3 Scalability
7.4 Compatibility
7.5 Backup and Recovery
7.6 Responsiveness

Chapter 8 User Requirements
8.1 Admin / Provider Interface Requirements
8.2 Customer (User) Interface Requirements
8.3 Usability Requirements

Chapter 9 Business Model
9.1 Revenue Model
9.2 Marketing Strategy
9.3 Customer Support
9.4 Partnership with Catering Providers

Chapter 10 Conclusion
10.1 Summary of the System Design
10.2 Expected Impact
10.3 Future Development

---

# Catering Application Analysis and Design (Cateringku)

## Chapter 1 Introduction
### 1.1 Background of the Study
In daily life, many individuals, families, and organizations require catering services for various events such as weddings, corporate meetings, and daily meals. Catering providers play an important role in ensuring food availability, hygiene, and convenience for these events. However, the process of finding and ordering suitable catering services remains inefficient and largely informal.

Currently, many customers still rely on personal references, social media posts, or word-of-mouth recommendations to find catering providers. This traditional approach often creates several challenges, including limited access to quality providers, difficulty comparing prices and menus, and a lack of transparency in order fulfillment and delivery tracking. As a result, customers may spend significant time searching for the right caterer, and the ordering process can become inefficient.

On the other hand, catering providers who are looking to expand their business also face difficulties in reaching new customers. Most existing food delivery platforms focus on single-portion restaurant meals rather than bulk orders, buffets, or event catering. Because of this limitation, catering businesses frequently depend on informal networks or physical brochures, which reduces their market reach.

The lack of a dedicated digital platform specifically designed for catering services creates a gap between customers seeking food services and providers seeking orders. A technology-based solution that facilitates matching between customers and caterers could improve transparency, efficiency, and accessibility in the ordering process.

Therefore, this study aims to design and analyze a catering marketplace application called "Cateringku" that connects customers and catering providers through a digital platform. The system is expected to allow caterers to showcase their packages and enable customers to search, compare, and order catering based on their needs, preferences, and location. 

### 1.2 Problem Statement
The process of finding and ordering catering services is still largely conducted through informal and inefficient methods. Many customers rely on personal recommendations or social media to search for caterers. This approach often results in limited access to reliable providers, difficulty in verifying food quality, and a lack of transparency in pricing and package details.

At the same time, catering providers face challenges in marketing their bulk services. Existing food delivery apps are not optimized for large-scale catering orders such as weddings, daily subscriptions, or corporate events. As a result, providers struggle to manage orders efficiently and expand their customer base.

Based on these conditions, the main problems addressed in this study can be formulated as follows:
- How can a digital platform be designed to effectively connect customers and catering providers in the ordering process?
- How can the system facilitate providers in posting their catering packages with clear requirements such as menus, minimum orders, and prices?
- How can customers easily search, compare, and order catering packages that match their event needs and location?
- What system features are needed to improve transparency, order tracking, and communication between customers and providers?

### 1.3 Objectives of the System
The main objective of this study is to design and analyze a catering marketplace application (Cateringku) that connects customers and catering providers through a digital platform. The system aims to improve the efficiency, transparency, and accessibility of the catering ordering process.

The specific objectives of the system are as follows:
- To design a digital platform that enables providers to list their catering packages with detailed information (price, menu, minimum order).
- To provide a system that allows customers to search for catering based on categories (e.g., weddings, buffets, corporate, daily boxes).
- To facilitate a seamless checkout and order tracking process where customers can monitor their food preparation and delivery status in real-time.
- To improve transparency through features such as ratings, reviews, and detailed provider profiles.
- To design a scalable and user-friendly system for both web and mobile access.

### 1.4 Scope of the System
The scope of this study focuses on the analysis and design of the Cateringku application. The system includes the following aspects:
1. **User Management:** Customers and Admins/Providers can register, log in, and manage profiles.
2. **Catering Package Listing:** Providers can publish packages including menus, pricing, and images.
3. **Search and Filtering:** Customers can search by category (wedding, buffet, corporate, etc.) and distance.
4. **Order and Checkout:** Customers can place orders, specify quantities, and proceed to checkout.
5. **Live Tracking Simulation:** The system provides real-time status updates (Waiting for Payment, Preparing Ingredients, Cooking, Packaging, Delivering, Arrived).
6. **Promotions:** The system supports promo codes and discounts.
7. **System Limitations:** This study focuses on the front-end design and simulated state management; advanced payment gateway integration is beyond the scope of this initial prototype.

### 1.5 Methodology
This study applies the Design Thinking methodology. The methodology consists of Empathize, Define, Ideate, Prototype, and Test stages to ensure a human-centered approach.

---

## Chapter 2 User Analysis
### 2.1 User Persona – Customer (Event Organizer / Individual)
**Persona Profile**
- **Name:** Budi Handoko
- **Age:** 32 years old
- **Occupation:** Office Worker / Committee Member
- **Location:** Jakarta Selatan
- **Needs:** Needs to order lunch boxes for 100 people for a corporate event next week.

Currently, Budi searches for caterers through WhatsApp contacts or Instagram. It is inefficient because he has to wait for replies regarding menus and pricing. He prefers a digital platform where he can browse packages, compare prices, and order directly.

**Goals:** Find reliable caterers quickly, view transparent pricing, and track order status easily.
**Frustrations:** Slow response from traditional caterers, hidden fees, and uncertainty about delivery time.

### 2.2 User Persona – Catering Provider (Mitra Catering)
**Persona Profile**
- **Name:** Ibu Rini (Owner of Raja Catering)
- **Age:** 45 years old
- **Occupation:** Catering Business Owner
- **Location:** Jakarta Timur

Ibu Rini manages a catering business that provides wedding buffets and corporate meals. She struggles to reach new customers outside her immediate network. She wants a platform to easily display her diverse packages (from economical to premium) and manage incoming orders without the hassle of manual WhatsApp chatting.

**Goals:** Increase sales, manage orders in one dashboard, and build a strong digital reputation.
**Frustrations:** Managing multiple chat threads for orders, dealing with last-minute cancellations, and limited marketing reach.

### 2.3 User Journey / User Story
**Customer Journey:**
The customer logs into Cateringku, searches for "Nasi Box", filters by location, and selects "Budi Catering". They review the menus, apply a promo code, and check out. They then monitor the live status of the order through the application until it arrives.
- *User Story:* As a customer, I want to track my order status so that I know exactly when the food will arrive.

**Provider Journey:**
The provider logs into the admin dashboard, updates pricing, and receives a new order notification. They update the order status to "Mulai Memasak" which instantly notifies the customer.
- *User Story:* As a provider, I want to update order statuses so that customers feel informed and secure.

### 2.4 Problem Identification
Based on the analysis of the current ordering process, several problems were identified:
1. **Inefficient Ordering Process:** Manual communication via chat apps is time-consuming.
2. **Limited Market Reach:** Providers rely heavily on word-of-mouth.
3. **Lack of Transparency:** Customers cannot easily compare menus and prices.
4. **No Standardized Tracking:** Customers don't know the status of their food preparation.

---

## Chapter 3 Existing Business Process
### 3.1 Current Catering Order Process
Currently, customers message caterers directly, ask for PDF menus, negotiate prices, and transfer money manually. The caterer manually records the order in a notebook or spreadsheet.

### 3.2 Existing Marketing Process for Caterers
Caterers post photos on Instagram or Facebook and hope customers DM them. They cannot process transactions directly on these platforms.

### 3.3 Problems in the Current Process
- Time-consuming menu distribution and back-and-forth communication.
- High potential for miscommunication regarding delivery times and menu specifics.
- Difficulty in building a verified reputation due to the absence of a centralized review system.

### 3.4 Business Process Analysis
**Proposed Business Process:**
1. Provider registers and lists packages on Cateringku.
2. Customer browses, selects a package, and places an order.
3. System processes checkout and payment.
4. Provider receives the order and updates the preparation status.
5. Customer tracks the status in real-time.
6. Upon delivery, the customer leaves a review.

---

## Chapter 4 System Design Thinking Approach
### 4.1 Empathize Stage
Through analysis, it is clear that customers need a fast, transparent way to order food in bulk, while caterers need a dedicated marketplace to sell bulk packages without the noise of single-meal food delivery apps.

### 4.2 Define Stage
**Problem Definition:** The catering ordering process is informal and lacks transparency, making it hard for customers to find reliable providers and for caterers to manage and scale their orders.
**Design Challenge:** How might we design a dedicated marketplace that streamlines bulk food ordering, provides transparent pricing, and offers real-time order tracking?

### 4.3 Ideate Stage
**Proposed System Features:**
- **Centralized Marketplace:** Categories for Wedding, Buffet, Corporate, Nasi Box, and Daily Catering.
- **Detailed Package Listings:** Showing minimum order quantities, menus, and prices per portion.
- **Live Status Tracking:** Simulating the kitchen process (Preparing Ingredients -> Cooking -> Packaging -> Delivering).
- **Interactive Map/Location System:** Showing distance from the caterer to the user.
- **Promo System:** To encourage user acquisition and retention.

### 4.4 Proposed System Features
1. **User Registration and Authentication**
2. **Provider and Package Management**
3. **Catering Search and Map Integration**
4. **Checkout and Promo System**
5. **Real-time Order Tracking (Toast Notifications & Timeline)**
6. **Rating and Review System**
