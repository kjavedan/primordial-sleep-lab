export const services = [
	{
		id: 1,
		title: "One on One Sleep Coaching",
		description:
			"Customized sleep programs with tools, resources, and one-on-one support. I'll help interpret your sleep data and guide you to optimal sleep quality.",
		image: "/one-on-one.png",
		imageAlt: "One on One Sleep Coaching",
	},
	{
		id: 2,
		title: "Couples Sleep Coaching",
		description:
			"Most couples struggle to sleep well together, one always ends up sacrificing sleep. With my couples sleep coaching, I help you understand what's happening at night and improve sleep for both partners based on their individual needs.",
		image: "/couples.png",
		imageAlt: "Couples Sleep Coaching",
	},
	{
		id: 5,
		title: "Companies Sleep Coaching",
		description:
			"Optimize your sleep with a my online video course. I'll provide you with all the necessary tools, resources so you can do it yourself and improve your sleep in a more cost-effective way.",
		image: "/staff.png",
		imageAlt: "Companies Sleep Coaching",
	},
	{
		id: 3,
		title: "Group Sleep Coaching",
		description:
			"A more fun and accessible way to get the sleep coaching you need. You'll connect with others facing the same struggles in a supportive community full of motivation and accountability.",
		image: "/group.png",
		imageAlt: "Group Sleep Coaching",
	},
	{
		id: 4,
		title: "Sleep to thrive",
		description:
			"Are you a company that truly cares about your team? My program helps your staff become more focused, productive, and energized—by teaching them to sleep like cavemen. Boost performance, profit, and create a workplace full of healthier, happier people.",
		image: "/running.png",
		imageAlt: "Sleep to thrive",
	},
];

export const quizzes = [
	{
		id: 1,
		title: "How your sleep affecting you?",
		description:
			"Discover how your sleep patterns impact your daily life and wellbeing.",
		image: "/dream.png",
		imageAlt: "Sleep Impact Quiz",
		href: "https://primordialhealth.outgrow.us/sleepeffects",
	},
	{
		id: 2,
		title: "Do you know your chronotype?",
		description:
			"Find out if you're a morning lark, night owl, or something in between.",
		image: "/owel.png",
		imageAlt: "Chronotype Quiz",
		href: "https://primordialhealth.outgrow.us/Chronotype",
	},
	{
		id: 3,
		title: "Might I have a sleep disorder?",
		description:
			"Take this assessment to identify potential sleep disorder warning signs.",
		image: "/screen-light.png",
		imageAlt: "Sleep Disorder Quiz",
		href: "https://primordialhealth.outgrow.us/sleepdisorders",
	},
];

type Testimonial = {
	id: number;
	text?: string;
	author?: string;
	role?: string;
	video?: string; // URL or embed code for video testimonials
};

export const testimonials: Testimonial[] = [
	{
		id: 1,
		text: `Carolina’s course taught me the importance of sleep hygiene and how it impacts overall health. I learned practical ways to improve my sleep, including understanding my chronotype and setting up my own sleep lab. Carolina is relatable, passionate, and always supportive. I highly recommend her course if you want to improve your sleep.`,
		author: "Robert Kent",
		role: "Therapist",
	},
	{
		id: 2,
		text: `Taking the Primordial Sleep course meant an important gain in health and professional performance for me. After following the classes, changing habits and adhering to the use of some devices recommended by Carolina Ramuski, I started to sleep the 8 hours recommended for my chronotype (hummingbird), I increased the duration of my REM sleep and my Deep sleep and got to lose 11 kilos in 8 months. I strongly recommend this excellent program for improving sleep quality and quality of life.`,
		author: "DDS, MSc, PhD André De Vito",
		role: "CEO Aluminus Academy",
	},
	{
		id: 3,
		text: `Really personalised approach with coach Zoom calls and regular check ups, I was able to have less anxiety around bedtime. Carolina is lovely, personable, and inspirational.\n\nThis was a truly great experience and I learnt a lot!`,
		author: "Tafara Graig",
		role: "Teacher",
	},
	{
		id: 4,
		text: `This experience was amazing! Engaging content and a lot of tips and further reading material. Identifying my chronotype - and what works best for me - allowed me to improve my time to sleep. With offices now introducing a better life balance and care for mental health, it would be interesting to have this workshop across businesses - so I would recommend for business, friends, and family.`,
		author: "Lili Avila",
		role: "Worldwide Account manager",
	},
	{
		id: 5,
		text: `Since starting the Primordial Sleep lab, I am less tired during the day and I am managing falling asleep within my sleep routine setup. I really like the content of the course and would recommend it to everyone.`,
		author: "Ana Jaloretto",
		role: "Business Support Officer",
	},
	{
		id: 6,
		text: `I've had  sleeping problems for years and after only one long coaching session with Carolina, I've realized that the base of my problem was psychological and it was related to some childhood traumas that I have. Once she helped me to identify what could be the problem I started paying attention to it and consequently started sleeping better, Thank you for that talk we had Carolina, it's been helping a lot`,
		author: "Marcel Vianna",
		role: "Tattoo Artist",
	},
	{
		id: 7,
		text: `All the content and follow-up I've had during this process was absolutely useful and effective. Each week Carolina brought contents that complemented each other. With small changes in my habits, I improved the quality of my sleep and was able to identify habits that were destroying my sleep and rest time in general. This process is highly recommended.`,
		author: "Bruna Magnoni",
		role: "Tattoo Artist",
	},
	{
		id: 8,
		text: `Carolina's Sleeping program was a life-changing experience for me and a few others in my company.
Even though I was coming out of burnout and had enormous sleeping problems when I started the program, I improved my sleep quality drastically after very small changes.
Carolina is a passionate professional who coaches with enthusiasm and attention to detail.
If you care about your employees and their mental health, I highly recommend her!`,
		author: "Mileni Bender",
		role: "Manager Strategic Partnerships",
	},
	// 9. Video testimonial
	{
		id: 9,
		video: "VIDEO_URL_1", // Replace with actual video URL or embed code
		author: "Mark Pamintuan",
		role: "Developer",
	},
	// 10. Video testimonial
	{
		id: 10,
		video: "VIDEO_URL_2", // Replace with actual video URL or embed code
		author: "Jen Trinanes",
		role: "Developer",
	},
];

export const blogs = [
	{
		id: 1,
		title: "Saunas and Better Sleep",
		author: "Carolina Ramuski",
		readTime: "2 min read",
		image: "/sauna.png",
		href: "the-surprising-benefits-of-saunas-for-sleep",
	},
	{
		id: 2,
		title: "What About Caffeine?",
		author: "Carolina Ramuski",
		readTime: "3 min read",
		image: "/coffee.png",
		href: "what-about-caffeine",
	},
	{
		id: 3,
		title: "Is Oversleeping Good?",
		author: "Carolina Ramuski",
		readTime: "4 min read",
		image: "/extra-sleep.png",
		href: "is-sleeping-too-much-good",
	},
	{
		id: 4,
		title: "Sleep Cycles",
		author: "Carolina Ramuski",
		readTime: "5 min read",
		image: "/insomnia.png",
		href: "sleep-cycles",
	},
	{
		id: 5,
		title: "What Could Be Hurting Your Sleep?",
		author: "Carolina Ramuski",
		readTime: "3 min read",
		image: "/sleepless.png",
		href: "what-could-be-hurting-your-sleep",
	},
	{
		id: 6,
		title: "When Do You Need a Sleep Study?",
		author: "Carolina Ramuski",
		readTime: "3 min read",
		image: "/sleep-study.png",
		href: "when-to-look-for-a-sleep-study",
	},
	{
		id: 7,
		title: "Signs You Aren’t Getting Enough Sleep",
		author: "Carolina Ramuski",
		readTime: "3 min read",
		image: "/sleep-hurting.png",
		href: "signs-of-sleeplessness",
	},
];
