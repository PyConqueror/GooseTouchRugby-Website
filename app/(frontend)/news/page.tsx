import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/Footer"
import { NewsDisplay } from "@/components/news/NewsDisplay"
import { NewsletterSection } from "@/components/news/NewsletterSection"
import type { NewsArticle } from "@/types" // Import type

// Fetch or define news data (Server Component context)
async function getNewsArticles(): Promise<NewsArticle[]> {
  // Replace with actual data fetching logic
  return [
    {
      id: 1,
      title: "Pre-Season Training Starts Next Week",
      date: "April 18, 2025",
      excerpt:
        "Get ready for an exciting new season! Our pre-season training sessions begin next Monday at 6:30 PM at Goose Field. All players, both returning and new, are encouraged to attend. Coach Drew has prepared a comprehensive training program to get everyone in shape for the upcoming season.",
      content:
        "Get ready for an exciting new season! Our pre-season training sessions begin next Monday at 6:30 PM at Goose Field. All players, both returning and new, are encouraged to attend.\n\nCoach Drew has prepared a comprehensive training program to get everyone in shape for the upcoming season. The sessions will focus on core skills, fitness, and team strategy. Please bring appropriate footwear, water bottle, and weather-appropriate clothing.\n\nThe pre-season schedule will run for four weeks, with sessions every Monday and Thursday evening from 6:30 PM to 8:00 PM. This is a great opportunity for new players to get acquainted with the team and for returning players to shake off the rust before competitive matches begin.\n\nIf you're planning to attend but haven't yet registered for the season, please complete your registration form online or contact our team manager to ensure we have all your details up to date.\n\nWe're looking forward to seeing everyone there and kicking off what promises to be our best season yet!",
      image: "/news-1.svg",
      category: "Announcement",
      featured: true,
    },
    {
      id: 2,
      title: "New Team Kit Unveiled",
      date: "April 10, 2025",
      excerpt:
        "We're excited to reveal our brand new team kit for the upcoming season, featuring our iconic goose logo. The new design combines our traditional yellow and black colors with a modern twist. Pre-orders are now available through our online shop.",
      content:
        "We're excited to reveal our brand new team kit for the upcoming season, featuring our iconic goose logo. The new design combines our traditional yellow and black colors with a modern twist.\n\nThe kit has been designed with both style and performance in mind. Made from high-quality, breathable fabric, the new jerseys will help keep players cool during intense matches. The design features our signature yellow as the primary color with black accents and a subtle goose pattern woven into the fabric.\n\nEach kit includes a jersey, shorts, and socks, all designed to match perfectly. Player names and numbers can be added for a small additional fee.\n\nPre-orders are now available through our online shop, with a special early bird discount of 15% for orders placed before May 1st. Team members can also place orders through the team manager to receive their player discount.\n\nThe new kits are expected to arrive by mid-May, just in time for our first match of the season. Don't miss out on being one of the first to sport our fresh new look!",
      image: "/news-2.svg",
      category: "Team News",
      featured: true,
    },
    {
      id: 3,
      title: "Community Rugby Day Success",
      date: "March 28, 2025",
      excerpt:
        "Thank you to everyone who attended our Community Rugby Day. It was a fantastic event with over 200 participants! We had a great time introducing new players to the sport and connecting with the local community. Special thanks to our sponsors and volunteers who made this event possible.",
      content:
        "Thank you to everyone who attended our Community Rugby Day. It was a fantastic event with over 200 participants! We had a great time introducing new players to the sport and connecting with the local community.\n\nThe day featured a variety of activities for all ages, including touch rugby games, skills workshops, and a barbecue lunch. It was wonderful to see so many families come out and enjoy the beautiful weather while learning more about rugby.\n\nOur coaching staff did an amazing job running the skills stations, teaching the basics of passing, tackling (with pads!), and game strategy. The exhibition match between our senior players was a highlight, showcasing the excitement and camaraderie of the sport.\n\nSpecial thanks to our sponsors and volunteers who made this event possible. Local businesses provided food, drinks, and prizes for our raffle, while our dedicated volunteers ensured everything ran smoothly throughout the day.\n\nWe're pleased to announce that 15 new players signed up to join our club following the event, and we raised over $1,500 for new training equipment. This truly was a successful day for both our club and the community.\n\nWe're already looking forward to making next year's Community Rugby Day even bigger and better!",
      image: "/news-3.svg",
      category: "Event",
      featured: true,
    },
    {
      id: 4,
      title: "Player Spotlight: Sam Williams",
      date: "March 20, 2025",
      excerpt:
        "This month's player spotlight features our talented scrum half, Sam Williams. Sam has been with the team for three years and has become an integral part of our success. Learn about Sam's rugby journey, training routine, and favorite moments with the team.",
      content:
        'This month\'s player spotlight features our talented scrum half, Sam Williams. Sam has been with the team for three years and has become an integral part of our success.\n\nSam started playing rugby at the age of 14 after watching the World Cup on television. "I was immediately drawn to the combination of strategy and physicality," Sam explains. "There\'s nothing quite like the feeling of executing a perfect play as a team."\n\nAs our scrum half, Sam is essentially the quarterback of the team, making split-second decisions and directing play. Coach Drew describes Sam as "the heart of our offense, with exceptional vision and communication skills."\n\nWhen asked about training, Sam emphasizes the importance of both physical conditioning and mental preparation. "I spend a lot of time watching game footage and studying different defensive setups. On the physical side, I focus on explosive speed and core strength."\n\nSam\'s favorite moment with Goose Touch Rugby came last season during the semifinal match against the Mountain Lions. "We were down by five points with two minutes left, and we managed to score a try in the corner after 15 phases of play. The teamwork and determination in that moment was something special."\n\nOff the field, Sam works as a physical therapist and enjoys hiking and cooking. "Rugby has taught me so much about discipline and teamwork that carries over into every aspect of life."\n\nWe\'re fortunate to have Sam as part of our team and look forward to many more seasons of brilliant play!',
      image: "/placeholder.svg?height=400&width=600",
      category: "Player Spotlight",
      featured: false,
    },
    {
      id: 5,
      title: "Fundraising Goal Reached",
      date: "March 15, 2025",
      excerpt:
        "We're thrilled to announce that we've reached our fundraising goal for new training equipment! Thanks to the generosity of our supporters, we'll be able to purchase new tackle bags, training cones, and practice jerseys for the upcoming season.",
      content:
        "We're thrilled to announce that we've reached our fundraising goal for new training equipment! Thanks to the generosity of our supporters, we'll be able to purchase new tackle bags, training cones, and practice jerseys for the upcoming season.\n\nOur initial goal was to raise $3,000, but we've exceeded that with a final total of $3,750. This additional funding will allow us to also invest in some new ball handling skills equipment that wasn't in our original plan.\n\nThe fundraising campaign included our online donation drive, the charity quiz night at Local Brewery, and the sponsored run completed by our coaching staff. Every contribution, no matter the size, has helped us reach this milestone.\n\nThe new equipment will significantly enhance our training sessions, allowing for more varied and effective drills. The practice jerseys will help distinguish teams during training matches and create a more game-like environment for skill development.\n\nWe've already placed orders for the equipment, which should arrive within the next two weeks. Coach Drew is excited to incorporate the new gear into training sessions immediately.\n\nA special thank you goes out to Local Brewery for hosting our quiz night, to everyone who participated in or donated to the sponsored run, and to all individual donors who contributed to the campaign. Your support makes a real difference to our club.\n\nWe look forward to putting this equipment to good use and showing the results on the field this season!",
      image: "/placeholder.svg?height=400&width=600",
      category: "Announcement",
      featured: false,
    },
    {
      id: 6,
      title: "Youth Rugby Program Expansion",
      date: "March 8, 2025",
      excerpt:
        "We're expanding our youth rugby program to include ages 8-12! Starting next month, we'll be offering weekly training sessions specifically designed for younger players. This is a great opportunity for kids to learn the fundamentals of rugby in a fun and supportive environment.",
      content:
        "We're expanding our youth rugby program to include ages 8-12! Starting next month, we'll be offering weekly training sessions specifically designed for younger players. This is a great opportunity for kids to learn the fundamentals of rugby in a fun and supportive environment.\n\nThe new junior program will focus on developing basic skills through games and activities rather than formal matches. Our experienced youth coaches have created a curriculum that emphasizes enjoyment, teamwork, and gradual skill progression.\n\nSessions will be held every Saturday morning from 9:30 AM to 11:00 AM at Goose Field, beginning April 5th. All equipment will be provided, though participants should bring appropriate footwear, water bottle, and weather-appropriate clothing.\n\nThe program will be led by Reese Clark, our assistant coach who has extensive experience working with young athletes. Reese will be supported by several of our senior players who are excited to share their love of the game with the next generation.\n\nRegistration is now open, with an early bird discount available until March 25th. The program cost includes a t-shirt, water bottle, and end-of-season celebration. Scholarships are available for families who need financial assistance.\n\nWe believe that introducing children to rugby at a young age not only develops their athletic abilities but also teaches valuable life skills such as respect, teamwork, and resilience. We can't wait to welcome these young players to our rugby family!\n\nFor more information or to register, please visit our website or contact our youth program coordinator.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Youth Rugby",
      featured: false,
    },
    {
      id: 7,
      title: "Match Report: Goose Touch Rugby vs River Hawks",
      date: "March 1, 2025",
      excerpt:
        "Catch up on all the action from our recent match against the River Hawks. In an exciting game that came down to the final minutes, our team secured a 24-18 victory. Read the full match report for player highlights and coach's comments.",
      content:
        "Catch up on all the action from our recent match against the River Hawks. In an exciting game that came down to the final minutes, our team secured a 24-18 victory.\n\nMatch Summary:\nThe game began with high intensity from both sides, with the River Hawks taking an early lead through a well-worked try in the corner. Our team responded quickly, with Sam Williams orchestrating a brilliant attacking move that resulted in Jordan Taylor crossing the line to level the score.\n\nThe first half continued to be a back-and-forth affair, with both teams adding another try before the break, leaving the halftime score at 12-12.\n\nIn the second half, our fitness training began to show as we dominated possession and territory. Casey Brown scored a spectacular solo try, breaking through three tackles to put us ahead. The River Hawks responded with a penalty kick to narrow the gap to 19-15.\n\nWith ten minutes remaining, the Hawks scored another penalty to make it 19-18, setting up a tense finale. Our team showed tremendous character, maintaining possession and eventually creating space for Morgan Smith to score the decisive try in the 78th minute.\n\nPlayer Highlights:\n- Sam Williams was named Player of the Match for controlling the game from scrum half and contributing 7 points with the boot.\n- Jordan Taylor and Casey Brown both scored crucial tries and were solid in defense.\n- Riley Wilson made an incredible 15 tackles, leading our defensive effort.\n\nCoach's Comments:\n\"I'm incredibly proud of the team's performance today,\" said Coach Drew. \"We showed great resilience when under pressure and executed our game plan effectively. There are still areas to improve, particularly our discipline in the first half, but this was a significant step forward for us as a team.\"\n\nNext Match:\nWe'll be facing the Mountain Lions at home next Saturday. Come out and support the team as we look to build on this victory!",
      image: "/placeholder.svg?height=400&width=600",
      category: "Match Report",
      featured: false,
    },
    {
      id: 8,
      title: "New Sponsorship Announcement",
      date: "February 22, 2025",
      excerpt:
        "We're pleased to welcome Local Brewery as our newest sponsor! Their support will help fund our team's travel expenses for away matches this season. Look for their logo on our new team kit and visit their taproom for special discounts when you wear your Goose Touch Rugby gear!",
      content:
        "We're pleased to welcome Local Brewery as our newest sponsor! Their support will help fund our team's travel expenses for away matches this season.\n\nLocal Brewery has been a fixture in our community for the past five years, known for their craft beers and community involvement. This partnership represents a perfect match between two local organizations committed to bringing people together.\n\n\"We've always been fans of Goose Touch Rugby and what they bring to our community,\" says Local Brewery founder Jane Smith. \"Many of our regular customers are rugby players or fans, so this partnership feels natural. We're excited to support the team's growth and success.\"\n\nAs part of the sponsorship agreement, the Local Brewery logo will appear on our new team kit, and they'll be providing post-match refreshments for home games. Additionally, team members and supporters can enjoy special discounts at the taproom when wearing Goose Touch Rugby gear.\n\nThe financial support will primarily go toward covering transportation costs for away matches, allowing us to compete in more tournaments throughout the region. This expanded schedule will provide valuable experience for our players and increase our club's visibility.\n\n\"Travel expenses have always been a challenge for us,\" explains Team Manager Finley Adams. \"This sponsorship removes a significant financial burden and allows us to focus on what we do best – playing rugby and representing our community.\"\n\nTo celebrate this new partnership, we'll be hosting a special event at Local Brewery on March 5th. Team members will be present, and a portion of all sales that evening will go toward our youth rugby program.\n\nWe encourage all our supporters to show their appreciation by visiting Local Brewery and thanking them for their support of community sports!",
      image: "/placeholder.svg?height=400&width=600",
      category: "Sponsorship",
      featured: false,
    },
    {
      id: 9,
      title: "Rugby Skills Workshop",
      date: "February 15, 2025",
      excerpt:
        "Join us for a special rugby skills workshop led by former national team player, Chris Johnson. This three-hour session will focus on advanced passing techniques, tactical awareness, and game strategy. Open to all team members and rugby enthusiasts in the community.",
      content:
        "Join us for a special rugby skills workshop led by former national team player, Chris Johnson. This three-hour session will focus on advanced passing techniques, tactical awareness, and game strategy.\n\nEvent Details:\n- Date: March 2, 2025\n- Time: 1:00 PM - 4:00 PM\n- Location: Goose Field\n- Cost: $25 for non-members, free for Goose Touch Rugby members\n\nChris Johnson brings 15 years of professional experience to this workshop, including 45 caps for the national team and appearances in two World Cups. Currently working as a skills coach for several professional clubs, Chris is known for his ability to break down complex techniques into accessible learning points for players of all levels.\n\nThe workshop will be divided into three sections:\n1. Advanced Passing Techniques - Learn how to execute long passes, pop passes, and offloads under pressure.\n2. Tactical Awareness - Develop your ability to read the game and make better decisions on the field.\n3. Game Strategy - Understand team structures and how to exploit weaknesses in the opposition.\n\nThis workshop is open to all team members and rugby enthusiasts in the community. Participants should have a basic understanding of rugby rules and some playing experience, though advanced skills are not required.\n\nPlease bring appropriate footwear for field play, a water bottle, and weather-appropriate clothing. A limited number of rugby balls will be provided, but feel free to bring your own if you have one.\n\nSpaces are limited to ensure quality instruction, so early registration is recommended. To secure your spot, please register through our website or contact our events coordinator.\n\nDon't miss this opportunity to learn from one of the game's best and take your rugby skills to the next level!",
      image: "/placeholder.svg?height=400&width=600",
      category: "Event",
      featured: false,
    },
  ]
}

export default async function NewsPage() {
  const initialArticles = await getNewsArticles()

  // Remove client-side state and logic

  return (
    <div className="flex min-h-screen flex-col bg-yellow-50 font-comic">
      <Navbar />
      <main className="flex-1">
        {/* Use the client wrapper component */}
        <NewsDisplay initialArticles={initialArticles} />
        <NewsletterSection />
      </main>
      <Footer />
      {/* Remove global style for fadeIn if handled elsewhere */}
    </div>
  )
}
