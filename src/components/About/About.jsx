import { Avatar, Box, Button, Container, HStack, Heading, ListItem, Stack, Text, UnorderedList, VStack } from '@chakra-ui/react';
// import { Container } from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const Founder =()=>{
    let myImg = "https://media.licdn.com/dms/image/D4D03AQF_UDUH2rGsYw/profile-displayphoto-shrink_800_800/0/1669609047272?e=1686787200&v=beta&t=9OlShwl2VnXY_waQSRPvm9kzn7P1SdSQhZQ4yBxK8p0"
    return <Stack direction={['column' , 'row']}
    spacing={['4', '16']}
    padding={['8']}
    >
    <VStack>
        <Avatar boxSize={['40' , '48']} src={myImg}/>
        <Text children="Co-founder" opacity={'0.7'}/>
    </VStack>


    <VStack  justifyContent={'center'} alignItems={['ceneter', 'flex-start']} >
        <Heading  textAlign={['center', 'left']} children='Geetanjali chawla' size ={['md', 'xl']}/>
        <Text
   textAlign={['center', 'left']}
         children="I am a full-stack devloper also a DSA Teacher. Our mission is to provide quaility content at reasonable price. lorem  " />
    </VStack>
    </Stack>
}

const TandC = ({termsAndConditions})=>{
    return <Box>
        <Heading
        size = {'md'}
        children='Terms & Conditions'
        textAlign={['center', 'left']}
        my= "20"
        />

        <Box my={'4'}>
           <Text
           fontFamily={'heading'}
           letterSpacing={'widest'}
           textAlign={['center', 'left']}
           >
            
          

<p class="react">These Terms and Conditions govern your use of the reactcharity.org website (React websit{"e)"} and your relationship with React (we or us). Please read them carefully as they affect your rights and liabilities under the law. If you do not agree to these Website Terms and Conditions, please do not use the React website.</p>
<hr/>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >Contents</Heading >
<UnorderedList>
<ListItem>  Use Of The React Website</ListItem>
<ListItem>  The Websites Availability &amp; Access</ListItem>
<ListItem>  Personal Information</ListItem>
<ListItem>  Amendments</ListItem>
<ListItem>  Excluded Services</ListItem>
<ListItem>  Intellectual Property &amp; Copyright</ListItem>
<ListItem>  Disclaimer &amp; Liability</ListItem>
<ListItem>  Limitations &amp; Usage</ListItem>
<ListItem>  Third Party Websites</ListItem>
<ListItem>  Links To Our Website</ListItem>
<ListItem>  Advertising &amp; Sponsorship</ListItem>
<ListItem>  Applicable Law</ListItem>
<ListItem>  International Use</ListItem>
<ListItem>  Miscellaneous</ListItem>
</UnorderedList>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >Use Of The React Website</Heading>
<p class="react"><b>1.1</b> The React website is provided to you free of charge for your personal use subject to these Terms and Conditions. By using the React website you agree to be bound by these Terms and Conditions.</p>
<p class="react"><b>1.2</b> When completing the contact form on our website, you must ensure that the details you provide are correct and complete.</p>
<p class="react"><b>1.3</b> You must inform us immediately of any changes to the information that you provided when using our contact form by updating your personal details.</p>
<p class="react"><b>1.4</b> These Terms and Conditions do not affect your statutory rights.</p>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >The Websites Availability &amp; Access</Heading>
<p class="react"><b>1.5</b> Although React aims to offer you the best service possible, we make no promise that the services on the React website will meet all your requirements. React cannot guarantee that the services will be fault free. If a fault occurs in a service, you should report it to us and we will attempt to correct the fault as soon as we reasonably can.</p>
<p class="react"><b>1.6</b> Your access to the React website may be occasionally restricted to allow for repairs, maintenance or the introduction of new facilities or services. React will attempt to restore the service as soon as it reasonably can.</p>
<p class="react"><b>1.7</b> React reserves the right, at any time, to suspend or terminate your access to, or use of, the React website.</p>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >Personal Information</Heading>
<p class="react"><b>1.8</b> Personal Information, which you provide to React from within this website, will be subject to our Privacy Policy. To view our Privacy Policy, please <Link to = "/">click here</Link>.</p>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >Amendments</Heading>
<p class="react"><b>1.11</b> We may update these Terms and Conditions from time to time and without notice. We therefore advise you to re-read these Terms and Conditions each time you visit the website. If you do not wish to accept the new Terms and Conditions you should not continue to use the React website. If you continue to use the React website after reading the latest Terms and Conditions, your use of the React website indicates your agreement to be bound by the latest Terms and Conditions.</p>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >Excluded Services</Heading>
<p class="react"><b>1.12</b> The services provided on the React website do not include the provision of computer or other necessary equipment to access the React website. To use the React website you will require Internet connectivity and appropriate telecommunication links. We shall not be liable for any telephone or other costs that you may incur.</p>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >Intellectual Property &amp; Copyright</Heading>
<p class="react"><b>1.13</b> The content of the React website is protected by copyright, trademarks, database and other intellectual property rights. You may retrieve and display the content of the React website on a computer screen, store such content in electronic form on disk (but not any server or other storage device connected to a network) or print one copy of such content for your own personal, non-commercial use, provided you keep intact all and any copyright and proprietary notices. The copyright in such material shall be retained by React or, where the material has been licensed to React, by the right’s owners of the material.</p>
<p class="react"><b>1.14</b> You may not otherwise reproduce, modify, copy, distribute or use for commercial purposes any of the materials or content on the React website without our written permission.</p>
<p class="react"><b>1.15</b> All copyright and other intellectual property rights in any material contained on this website is either owned by React or has been licensed to React by the right’s owners.</p>
<p class="react"><b>1.16</b> The text, images, graphics, sound files, animation files, video files and their arrangement on the site are all subject to copyright and other intellectual property protection of React or their providers, owners, or respective authors. These objects may not be copied for commercial use or distribution, nor may these objects be modified or reposted to other sites.</p>
<p class="react"><b>1.17</b> The site contains trademarks, which belong to their providers, owners, or respective authors and are subject to their own copyright Terms and Conditions. Visit the trademark provider, owner, or respective author’s website for their copyright Terms and Conditions. Use of these trademarks is forbidden unless prior written permission has been obtained from the owner of the trademark. React and its affiliates are not responsible for content on third party websites. All logos, text and trademarks are property of their respective owners.</p>
<p class="react"><b>1.18</b> You may not remove any copyright, trademark or intellectual property notices contained in the original material from any material downloaded or copied from the website.</p>
<p class="react"><b>1.19</b> Copying, distributing or any use of the materials contained on the website for any commercial purpose is prohibited.</p>
<p class="react"><b>1.20</b> You may not create a database by systematically downloading substantial parts of the website.</p>
<p class="react"><b>1.21</b> No license is granted to you in these Terms and Conditions to use any trademark of React or its affiliated companies.</p>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >Disclaimer &amp; Liability</Heading>
<p class="react"><b>1.22</b> The content of the website is for general information only and does not constitute any form of advice or recommendation upon which a specific decision should be made. React has done its best to ensure the accuracy and currency of the materials contained on its website but excludes any warranty expressed or implied as to quality, accuracy, timeliness, completeness or fitness for a particular purpose of the material contained on the React website.</p>
<p class="react"><b>1.23</b> React holds no responsibility for external actions taken due to the submission and use of links/websites on the React website.</p>
<p class="react"><b>1.24</b> React accepts no responsibility for loss or damage which may arise from reliance on information or advice contained on our website.</p>
<p class="react"><b>1.25</b> Whilst the React website may from time to time contain advertising material, React does not endorse or accept any liability for any of the products or services so advertised, or for any error or inaccuracy in the advertisements. Advertisers and sponsors are responsible for ensuring that material submitted for inclusion on the website complies with all relevant laws.</p>
<p class="react"><b>1.26</b> React will not be liable for any claims, penalties, loss, damages or expenses arising from the use or the inability to use the website or from any unauthorised access or alteration to the website by a third party.</p>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >Limitations &amp; Usage</Heading>
<p class="react"><b>1.27</b> You may not use the React website for any of the following purposes:</p>
<UnorderedList>
<ListItem>{"a)"} disseminating any unlawful, harassing, libelous, abusive, threatening, harmful, vulgar, obscene, or otherwise objectionable material</ListItem>
<ListItem>{"b)"} transmitting material that encourages conduct that constitutes a criminal offence, results in civil liability or otherwise breaches any relevant laws, regulations or code of practice</ListItem>
<ListItem>{"c)"} gaining unauthorised access to our or other computer systems</ListItem>
<ListItem>{"d)"} interfering with any other person’s use or enjoyment of the React website</ListItem>
<ListItem>{"e)"} breaching any laws concerning the use of public telecommunications networks</ListItem>
<ListItem>{"f)"} interfering or disrupting networks or websites connected to the React website</ListItem>
<ListItem>{"g)"} making, transmitting or storing electronic copies of materials protected by copyright without the permission of the owner</ListItem>
</UnorderedList>
<p class="react" style={{"marginTop":"20px"}}><b>1.28</b> React reserves the right to refuse to post material on the React website or to remove material already posted on the React website at any time.</p>
<p class="react"><b>1.29</b> You will indemnify us against all losses, liabilities, costs and expenses reasonably suffered or incurred by us, all damages awarded against us under any judgment by a court of competent jurisdiction and all settlements sums paid by us as a result of any settlement agreed by us arising out or in connection with:</p>
<p class="react">{"a)"} any claim by any third party that the use of the React website by you is defamatory, offensive or abusive, or of an obscene or pornographic nature, or is illegal or constitutes a breach of any applicable law, regulation or code of practice;</p>
<p class="react">{"b)"} any claim by any third party that the use of the React website by you infringes that third party’s copyright or other intellectual property rights of whatever nature; and</p>
<p class="react">{"c)"} any fines or penalties imposed by any regulatory, advertising or trading body or authority in connection with the use of the React website by you.</p>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >Third Party Websites</Heading>
<p class="react"><b>1.30</b> As a convenience to React customers, the React website may include links to other websites or material which are beyond its control. We are not responsible for content on the Internet or World Wide Web pages on any website outside the React website.</p>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >Links To Our Website</Heading>
<p class="react"><b>1.31</b> Links to the React website are permitted; please send an e-mail to inform React of your link to the website. You can email us through our contact form by <Link to = '/'>clicking here</Link>.</p>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >Advertising &amp; Sponsorship</Heading>
<p class="react"><b>1.32</b> Part of the React website may contain advertising and sponsorship. Advertisers and Sponsors are responsible for ensuring that material submitted for inclusion on the React site complies with relevant laws and codes. We will not be responsible for any error or inaccuracy in advertising and sponsorship material.</p>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >Applicable Law</Heading>
<p class="react"><b>1.33</b> These Terms and Conditions shall be governed by and construed in accordance with the laws of England and any disputes will be decided only by the English courts.</p>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >International Use</Heading>
<p class="react"><b>1.34</b> React makes no promise that materials on the React website are appropriate or available for use in locations outside the United Kingdom, and accessing the React website from territories where its contents are illegal or unlawful is prohibited. If you choose to access this website from locations outside the United Kingdom, you do so on your own initiative and are responsible for compliance with local laws.</p>
        <Heading
        size = {'md'}
    
        textAlign={['center', 'left']}
        my= "4"
        >Miscellaneous</Heading>
<p class="react"><b>1.35</b> You may not assign, sub-license or otherwise transfer any of your rights under these Terms and Conditions.</p>
<p class="react"><b>1.36</b> If any provision of these Terms and Conditions is found to be invalid by any court having competent jurisdiction, the invalidity of that provision will not affect the validity of the remaining provisions of these Terms and Conditions, which shall remain in full force and effect.</p>
<p class="react"><b>1.37</b> If you breach these Terms and Conditions and React ignores this, React will still be entitled to use its rights and remedies at a later date or in any other situation where you breach the Terms and Conditions.</p>
<p class="react"><b>1.38</b> React shall not be responsible for any breach of these Terms and Conditions caused by circumstances beyond their control.</p>
<p class="react"><b>1.39</b> A person who is not a party to these Terms and Conditions shall have no right under the Contract (Rights of Third Parties) Act 1999 to enforce any term of these Terms and Conditions but this shall not affect any right or remedy of a third party which exists or is available apart from that Act.</p>
<p class="react"><b>1.40</b> The React website is owned and operated by React. Address: React, St Luke’s House, 270 Sandycombe Road, Kew, Surrey, TW9 3NP.</p>
<p class="react">If you have any queries regarding these Terms and Conditions or any other information on this website, then please contact us by clicking here.</p>










           </Text>
        </Box>
        <Heading my="4" size ="xs" children ="refund only applicable for cancellation within 7 days"/>
    </Box>
}

const VideoPlayer =()=>{
    let introVideo = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

   return <Box>
           <video 
                 autoPlay
                 src={introVideo}

                 controls
                controlsList='nodownload nofullscreen noremoteplayback noplaybackrate no'
                disablePictureInPicture
                disableRemotePlayback
               muted

                ></video>
    </Box>
}
const About = () => {
    return (
        <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'} >
            <Heading children="About Us" textAlign={['center', 'left']}/>
            <Founder/>

            <Stack m={'8'} direction={['column','row']} alignItems={'center'}>
                <Text
                fontFamily={'cursive'}
                m='8'
                textAlign={['center', 'left']}
                > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, libero! Numquam doloremque reprehenderit quia nisi expedita ratione quaerat error nobis fugiat, maxime quas voluptate, id at voluptates laudantium velit dolorum.
                </Text>

                <Link to ="/subscribe">
                    <Button variant={'ghost'} colorScheme='yellow'>
                        Checkout Our Plans 
                    </Button>
                </Link>
            </Stack>
            <VideoPlayer/>
            <TandC termsAndConditions = {'terms and conditons'} />
            <HStack my="4" p='4'>
                <RiSecurePaymentFill/>    
                
                <Heading 
                size={'xs'}
                fontFamily={'sans-serif'}
                textTransform={'uppercase'}
                children={"Payment is secured by Razorpay"} />

            </HStack>
        </Container>
    );
}

export default About;
