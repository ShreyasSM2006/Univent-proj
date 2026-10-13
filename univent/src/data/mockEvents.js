// ILLUSTRATIVE SAMPLE DATA ONLY — these are not real events.
// In Milestone 2+ this file's helpers can be replaced by API calls.

export const categories = [
  { slug: 'hackathons', name: 'Hackathons', icon: 'Code2', blurb: 'Build, ship and compete in time-boxed sprints.' },
  { slug: 'workshops', name: 'Workshops', icon: 'Wrench', blurb: 'Hands-on sessions to learn a new skill.' },
  { slug: 'competitions', name: 'Competitions', icon: 'Trophy', blurb: 'Coding contests, quizzes and design challenges.' },
  { slug: 'conferences', name: 'Conferences', icon: 'Users', blurb: 'Talks and networking with industry voices.' },
  { slug: 'seminars', name: 'Seminars', icon: 'Presentation', blurb: 'Focused talks and expert Q&A sessions.' },
  { slug: 'college-festivals', name: 'College Festivals', icon: 'PartyPopper', blurb: 'Tech fests, cultural nights and more.' },
]

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`

export const events = [
  { id: 'evt-001', title: 'CodeStorm 24-Hour Hackathon', organizer: 'Sample Tech Club', category: 'hackathons', mode: 'Offline', location: 'Mumbai, Maharashtra', startDate: '2026-11-21', deadline: '2026-11-14', price: 0, featured: true, image: img('photo-1504384308090-c894fdcc538d'), tags: ['web', 'ai', 'teams'], description: 'A sample 24-hour build sprint where teams prototype solutions to open-ended problem statements.' },
  { id: 'evt-002', title: 'React from Zero Workshop', organizer: 'Sample Dev Community', category: 'workshops', mode: 'Online', location: 'Online', startDate: '2026-11-08', deadline: '2026-11-06', price: 199, featured: true, image: img('photo-1517048676732-d65bc937f952'), tags: ['react', 'frontend'], description: 'A beginner-friendly sample workshop covering components, props, state and routing.' },
  { id: 'evt-003', title: 'Algorithm Arena Coding Contest', organizer: 'Sample CS Department', category: 'competitions', mode: 'Online', location: 'Online', startDate: '2026-11-15', deadline: '2026-11-12', price: 0, featured: true, image: img('photo-1531482615713-2afd69097998'), tags: ['dsa', 'contest'], description: 'A sample timed contest with problems across arrays, graphs and dynamic programming.' },
  { id: 'evt-004', title: 'Cloud & Serverless Summit', organizer: 'Sample Cloud Meetup', category: 'conferences', mode: 'Hybrid', location: 'Pune, Maharashtra', startDate: '2026-12-05', deadline: '2026-11-28', price: 499, featured: true, image: img('photo-1540575467063-178a50c2df87'), tags: ['cloud', 'aws'], description: 'A sample one-day conference with talks on serverless design and cloud architecture.' },
  { id: 'evt-005', title: 'Intro to Machine Learning Seminar', organizer: 'Sample AI Society', category: 'seminars', mode: 'Offline', location: 'Thane, Maharashtra', startDate: '2026-11-18', deadline: '2026-11-16', price: 0, featured: true, image: img('photo-1523580494863-6f3031224c94'), tags: ['ml', 'beginners'], description: 'A sample seminar introducing core machine learning ideas with real-world examples.' },
  { id: 'evt-006', title: 'Technova College Fest', organizer: 'Sample Student Council', category: 'college-festivals', mode: 'Offline', location: 'Navi Mumbai, Maharashtra', startDate: '2026-12-12', deadline: '2026-12-08', price: 150, featured: true, image: img('photo-1492684223066-81342ee5ff30'), tags: ['fest', 'culture', 'tech'], description: 'A sample two-day fest mixing tech events, cultural performances and food stalls.' },
  { id: 'evt-007', title: 'UI/UX Design Sprint', organizer: 'Sample Design Guild', category: 'workshops', mode: 'Hybrid', location: 'Mumbai, Maharashtra', startDate: '2026-11-10', deadline: '2026-11-07', price: 299, featured: false, image: img('photo-1517048676732-d65bc937f952'), tags: ['design', 'figma'], description: 'A sample sprint that takes a product idea from sketch to clickable prototype.' },
  { id: 'evt-008', title: 'Open Source Contribution Hack', organizer: 'Sample FOSS Club', category: 'hackathons', mode: 'Online', location: 'Online', startDate: '2026-11-29', deadline: '2026-11-20', price: 0, featured: false, image: img('photo-1504384308090-c894fdcc538d'), tags: ['open-source', 'git'], description: 'A sample weekend event to make your first open source contributions with mentors.' },
  { id: 'evt-009', title: 'Startup Pitch Competition', organizer: 'Sample E-Cell', category: 'competitions', mode: 'Offline', location: 'Mumbai, Maharashtra', startDate: '2026-12-02', deadline: '2026-11-18', price: 100, featured: false, image: img('photo-1540575467063-178a50c2df87'), tags: ['startup', 'pitch'], description: 'A sample pitch event where student teams present ideas to a panel.' },
  { id: 'evt-010', title: 'Cybersecurity Basics Seminar', organizer: 'Sample Security Club', category: 'seminars', mode: 'Online', location: 'Online', startDate: '2026-11-13', deadline: '2026-11-11', price: 0, featured: false, image: img('photo-1523580494863-6f3031224c94'), tags: ['security'], description: 'A sample seminar on common vulnerabilities and safe development habits.' },
]

export const getEventById = (id) => events.find((e) => e.id === id)
export const getCategory = (slug) => categories.find((c) => c.slug === slug)
export const getEventsByCategory = (slug) => events.filter((e) => e.category === slug)
export const getFeaturedEvents = () => events.filter((e) => e.featured)

// "Closing soon": non-featured events ordered by registration deadline.
export const getClosingSoonEvents = (limit = 4) =>
  events.filter((e) => !e.featured).sort((a, b) => a.deadline.localeCompare(b.deadline)).slice(0, limit)
