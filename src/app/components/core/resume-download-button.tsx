'use client';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
const ResumeDownloadButton = () => {
	const handleDownload = () => {
		console.log('im here1');
		const link = document.createElement('a');
		link.href = '/assets/pdf/Houssam_Habbat_Resume.pdf'; // Path to your resume in the public directory
		link.download = 'Houssam_Habbat_Resume.pdf'; // The name of the file to be downloaded
		link.click();
	};

	return (
		<Button
			onClick={handleDownload}
			className='relative overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 text-white group'>
			<span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform transform translate-x-full group-hover:translate-x-0 ease-in-out duration-300'></span>
			<span className='relative flex items-center'>
				<Download className='mr-2 h-4 w-4' />
				Download Resume
			</span>
		</Button>
	);
};
export default ResumeDownloadButton;
