import { createClient } from '@supabase/supabase-js';

// These would normally come from environment variables
// For demo purposes using placeholder values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function subscribeToNewsletter(name: string, email: string) {
  try {
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ name, email, subscribed_at: new Date() }]);
      
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { 
      success: false, 
      error: 'There was an error subscribing to the newsletter. Please try again later.' 
    };
  }
}

export async function submitContactForm(name: string, email: string, message: string) {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, message, submitted_at: new Date() }]);
      
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { 
      success: false, 
      error: 'There was an error submitting your message. Please try again later.' 
    };
  }
}

export async function fetchLatestNews(limit = 3) {
  try {
    const { data, error } = await supabase
      .from('news_items')
      .select('*')
      .order('published_at', { ascending: false })
      .limit(limit);
      
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching news:', error);
    return { 
      success: false, 
      error: 'There was an error fetching the latest news.', 
      data: [] 
    };
  }
}