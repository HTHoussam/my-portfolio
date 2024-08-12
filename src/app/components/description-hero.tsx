import Image from 'next/image';
import './description-hero.css';
const DescriptionHero = () => {
	return (
		<section
			id='whoami'
			className='flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 p-6 md:p-2 bg-transparent'>
			<div className='flex-1 flex flex-col gap-8 md:gap-16'>
				<h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-slate-50 bg-clip-text text-transparent p-2 md:p-4 text-center lg:text-left'>
					Hey, I&apos;m Houssam Habbat
				</h1>
				<p className='text-lg md:text-3xl md:text-left mb-4 text-center lg:text-left'>
					I am a passionate Software Engineer, specialized in front-end
					development using React and TypeScript. As an advocate for web
					performance and accessibility and an evangelist for the Jamstack, I
					create amazing web applications to make the internet a better place.
					You can talk to me about RESTful APIs.
				</p>
				<p className='text-center lg:text-left my-4'>
					P.S. this website is open-source and available on{' '}
					<a href='https://github.com' className='text-blue-400 underline'>
						Github
					</a>
					.
				</p>
				<div className='flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4'>
					<a
						href='#contact'
						className='text-white py-2 px-4 bg-blue-500 rounded transition text-center'>
						Get in touch
					</a>
					<a
						href='#read-more'
						className='text-white py-2 px-4 border border-white rounded hover:bg-white hover:text-black transition text-center'>
						Read more →
					</a>
				</div>
			</div>
			<div className='lg:flex-[1/2] mt-8 lg:mt-0'>
				<Image
					src='/assets/imgs/mock-img.jpg'
					alt='Houssam Habbat'
					height={500}
					className='rounded-lg shadow-lg mx-auto lg:mx-0'
					width={500}
				/>
			</div>
		</section>
	);
};
export default DescriptionHero;
