'use client';

import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/" className="flex items-center">
			<img
				src="/svg-logo/Logo.svg"
				alt="Krumalabs Logo"
				className="h-32 w-auto"
				style={{ 
					objectFit: 'contain',
					minWidth: '480px'
				}}
				onError={(e) => {
					const target = e.target as HTMLImageElement;
					console.error('Error loading logo:', {
						src: target.src,
						error: e
					});
				}}
				onLoad={() => {
					console.log('Logo loaded successfully');
				}}
			/>
		</Link>
	);
} 