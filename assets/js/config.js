// ====================================================================
// School Connect — Site Config (auto-generated)
// Replace the URL and anon key below with your Supabase project values.
// ====================================================================
window.SUPABASE_URL = 'https://dgarrlzbmscpgtefdupm.supabase.co';
window.SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnYXJybHpibXNjcGd0ZWZkdXBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMzc0MTYsImV4cCI6MjA5NzkxMzQxNn0.7CNB3KcQD3NHr6ENDGb7gRX_ld_xjgpQeL_YVuLRW_A';
window.SCHOOL = {
  name:    'God of Seed Academy',
  short:   'GOSA',
  motto:   'Excellence in Learning and Character',
  currency:'₦',
  phone:   '2348088667076',
  email:   'godofseedacademy@gmail.com',
  address: '63B, Ishaga Abosule Street, Agbado Crossing, Ogun State',
  campuses:["Main Campus"],
  theme:   'theme15',
  font:    'plusjakarta',
  fontFamily: 'Plus Jakarta Sans',
  fontCss: 'Plus+Jakarta+Sans:wght@300;400;500;600;700;800',
  layout:  'layout0',
  modules: ["academic_setup","students","staff","classes","subjects","attendance","cbt-prompts","entrance","results","flyer","report-cards","analytics","admin-data","academic_records","storage","approvals","timetable-generator","checkin","diary","surveys","menu","settings","fees","timetable","cbt","sow","messages","announcements","events","gallery","library","digital_library","assignments","parents","idcards","directory","departments","broadcast","complaints","leave","visitors","hostel","transport","alumni","certificates","admissions","promotion","finance","inventory","hr","payroll","staff_loans","staff_bonus","appraisals","rubrics","transcripts","transfer_cert","counselling","voting","health","conduct","eresources","birthdays","lms","gamification","cafeteria","financial_aid","front_desk","career_counseling","document_builder","fleet_tracking","facility_booking","compliance","developer","lesson_plans","substitutions","behaviour","support_plans","activity_log","helpdesk","lost_found","school_calendar","reports","book_request","donations","payments_online","parent_meeting","inbox"],
  levels:  ["Pre-Nursery","Nursery 1","Nursery 2","Primary 1","Primary 2","Primary 3","Primary 4","Primary 5","Primary 6","JSS 1","JSS 2","JSS 3","SSS 1","SSS 2","SSS 3"],
  hmgLink: 'https://hmgconcepts.pages.dev/',
  logoExt: 'png',
  primary: '#0506ae',
  accent:  '#964eec'
};

// Build the supabase client
const sb = (window.supabase && SUPABASE_URL !== 'YOUR_SUPABASE_URL')
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

console.log('%c[God of Seed Academy] School Connect ready.', 'color:#0506ae;font-weight:bold;font-size:13px');

// FIX S-11: Enable free notification channels (mail:, wa.me:, sms: — no API keys needed)
// These open the user's own mail client / WhatsApp / SMS app — fully free.
window.SC_CONFIRM_FREE_EMAIL = true;
window.SC_CONFIRM_FREE_WA = true;
window.SC_CONFIRM_FREE_SMS = true;
