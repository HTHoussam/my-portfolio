'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const links: { name: string; href: string }[] = [
		{
			name: 'Who Am I',
			href: '#whoami',
		},
		{
			name: 'Experiences',
			href: '#experiences',
		},
		{
			name: 'Skills',
			href: '#skills',
		},
		{
			name: 'Message Me',
			href: '#message__me',
		},
	];
	return (
		<div className='flex items-start justify-between max-w-7xl p-4 mx-auto w-full'>
			<Avatar>
				<AvatarImage src='/assets/imgs/me.png' alt='@houssam_ht' />
				<AvatarFallback>HH</AvatarFallback>
			</Avatar>

			{/* Desktop Navigation */}
			<nav className='hidden md:flex flex-row text-xl text-secondary-foreground gap-8'>
				{links.map(({ name, href }) => (
					<Link
						key={name}
						className='pb-4 no-underline relative group capitalize hover:text-muted-foreground transition-all duration-300'
						href={href}>
						{name}
						<span className='absolute left-0 bottom-0 w-0 h-[4px] bg-muted-foreground transition-all duration-300 group-hover:w-full'></span>
					</Link>
				))}
			</nav>

			<div className='hidden md:flex flex-row gap-4'>
				<Link href={'https://github.com/HTHoussam'}>
					<Image
						src='/assets/imgs/github-icon.png'
						width={30}
						height={30}
						alt='github-icon'
					/>
				</Link>
				<Link href={'https://www.linkedin.com/in/habbathoussam/'}>
					<Image
						src='/assets/imgs/linkedin-icon.png'
						width={30}
						height={30}
						alt='linkedin-icon'
					/>
				</Link>
			</div>

			{/* Mobile Navigation */}
			<div className='flex md:hidden'>
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Button variant='ghost' className='p-0'>
							<MenuIcon className='w-6 h-6' />
						</Button>
					</SheetTrigger>
					<SheetContent side='right' className='flex bg-slate-800 flex-col p-6'>
						<div className='flex justify-between items-center mb-8'>
							<Image
								src='/assets/imgs/logo.png'
								width={30}
								height={30}
								alt='logo'
							/>
							<Button
								variant='ghost'
								className='p-0'
								onClick={() => setIsOpen(false)}>
								<XIcon className='w-6 h-6' />
							</Button>
						</div>
						<nav className='flex flex-col space-y-6 text-lg text-secondary-foreground'>
							{links.map(({ name, href }) => (
								<Link
									key={name}
									className='no-underline capitalize hover:text-muted-foreground transition-all duration-300'
									href={href}
									onClick={() => setIsOpen(false)}>
									{name}
								</Link>
							))}
						</nav>
						<div className='flex flex-row gap-4 mt-6'>
							<Link href={'https://github.com/HTHoussam'}>
								<Image
									src='/assets/imgs/github-icon.png'
									width={30}
									height={30}
									alt='github-icon'
								/>
							</Link>
							<Link href={'https://www.linkedin.com/in/habbathoussam/'}>
								<Image
									src='/assets/imgs/linkedin-icon.png'
									width={30}
									height={30}
									alt='linkedin-icon'
								/>
							</Link>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
};
export default Header;
