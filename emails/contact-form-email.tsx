import React from 'react';
import {
	Body,
	Container,
	Head,
	Html,
	Preview,
	Row,
	Section,
	Text,
	Hr,
} from '@react-email/components';

type ContactFormProps = {
	message: string;
	email: string;
};

export default function ContactFormEmail({ message, email }: ContactFormProps) {
	return (
		<Html>
			<Head />
			<Preview>New message from portfolio site</Preview>

			<Body style={main}>
				<Container style={container}>
					<Section style={{ paddingBottom: '20px' }}>
						<Row>
							<Text style={heading}>
								You received the following message from the
								contact form:
							</Text>
							<Hr style={hr} />
							<Text style={review}>{message}</Text>
							<Text style={paragraph}>
								The sender&apos;s email is: {email}
							</Text>
						</Row>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}

const main = {
	backgroundColor: '#ffffff',
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: '0 auto',
	padding: '20px 0 48px',
	width: '580px',
	maxWidth: '100%',
};

const heading = {
	fontSize: '32px',
	lineHeight: '1.3',
	fontWeight: '700',
	color: '#484848',
};

const paragraph = {
	fontSize: '18px',
	lineHeight: '1.4',
	color: '#484848',
};

const review = {
	...paragraph,
	padding: '24px',
	backgroundColor: '#f2f3f3',
	borderRadius: '4px',
};

const hr = {
	borderColor: '#cccccc',
	margin: '20px 0',
};
