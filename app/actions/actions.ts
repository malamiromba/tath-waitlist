"use server";

import { z } from "zod";
import clientPromise from "@/lib/mongodb";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function joinWaitlist(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email");

    if (!email) {
      return { success: false, message: "Email is required" };
    }

    const result = schema.safeParse({ email });

    if (!result.success) {
      return { success: false, message: result.error.issues[0].message };
    }

    // Store email in MongoDB
    let client;
    try {
      client = await clientPromise;
    } catch (connectionError: any) {
      console.error("Database connection error:", connectionError);
      return {
        success: false,
        message: "Unable to connect to database. Please try again later.",
      };
    }

    try {
      const db = client.db();
      const collection = db.collection("waitlist_emails");
      
      // Check if email already exists
      const existingEntry = await collection.findOne({ email: email.toString() });
      
      if (existingEntry) {
        return { success: false, message: "This email is already on the waitlist" };
      }
      
      // Insert new email
      const insertResult = await collection.insertOne({ 
        email: email.toString(),
        createdAt: new Date()
      });

      // console.log("Email inserted with ID:", insertResult.insertedId);

      const count = await getWaitlistCount();

      return {
        success: true,
        message: "You have been added to the waitlist!",
        count,
      };
    } catch (dbError: any) {
      console.error("Database operation error:", dbError);
      return {
        success: false,
        message: "Failed to save your email. Please try again later.",
      };
    }
  } catch (error: any) {
    console.error("Unexpected error in joinWaitlist:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

export async function getWaitlistCount() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("waitlist_emails");
    const count = await collection.countDocuments();
    return count;
  } catch (error: any) {
    console.error("Error getting waitlist count:", error);
    return 0;
  }
}