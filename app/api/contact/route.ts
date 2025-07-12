import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { contacts } from '@/lib/schema';
import { z } from 'zod';

// Force this route to be dynamic
export const dynamic = 'force-dynamic';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name is too long'),
  email: z.string().email('Invalid email address').max(255, 'Email is too long'),
  subject: z.string().min(1, 'Subject is required').max(500, 'Subject is too long'),
  message: z.string().min(1, 'Message is required'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the data
    const validatedData = contactSchema.parse(body);
    
    // Insert into database
    const result = await db.insert(contacts).values({
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
      message: validatedData.message,
    }).returning();
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully!',
        data: result[0]
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation error',
          errors: error.errors
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

// Optional: GET method to retrieve contacts
export async function GET() {
  try {
    const allContacts = await db.select().from(contacts).orderBy(contacts.createdAt);
    
    return NextResponse.json({
      success: true,
      data: allContacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch contacts' 
      },
      { status: 500 }
    );
  }
}