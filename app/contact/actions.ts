"use server";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { submitContact } from "@/utils/api";

export async function submitContactAction(formData: { name: string; email: string; message: string }) {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    
    // Call the centralized API helper to write to the database
    return await submitContact(supabase, formData);
}
