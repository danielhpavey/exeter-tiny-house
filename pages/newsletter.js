import Head from 'next/head'


export default function NewsletterPage({}) {
  return (
        <div>
            <Head>
                <title>Exeter Tiny House Community | Newsletter Signup</title>
                <meta name="description" content="Newsletter Signup | Exeter Tiny House Community | Creating a community of tiny homes in or around Exeter in Devon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='mx-auto prose'>
                <div className='flex gap-8 flex-wrap md:flex-nowrap'>
                    <div className='md:flex-1'>
<div id="mc_embed_signup" >
    <form action="https://exetertinyhousecommunity.us21.list-manage.com/subscribe/post?u=a6868afc91d079e3d8dd2add9&amp;id=92b466748d&amp;f_id=00bfa7e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self">
        <div id="mc_embed_signup_scroll">
        <h1 className="text-4xl mb-7">Join our mailing list</h1>
        <p>
        Stay up-to-date with the activities of the Exeter Tiny House Community!
        </p>
        <p>
We plan to publish the newsletter every 8 to 12 weeks, and you will receive your copy as an email.
        </p>
<div className="mc-field-group max-w-md">
	<label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
</label>
	<input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL" required />
	<span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
</div>
	<div id="mce-responses" className="clear foot">
		<div id="mce-error-response" className="response hidden"></div>
		<div id="mce-success-response" className="response hidden"></div>
	</div> 
    <div  aria-hidden="true" className="hidden"><input type="text" name="b_a6868afc91d079e3d8dd2add9_92b466748d" tabIndex="-1" defaultValue="" /></div>
        <div className="optionalParent">
            <div className="clear foot">
                <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                <p cla="brandingLogo"><a href="http://eepurl.com/ipHI6I" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" className="no-shadow"/></a></p>
            </div>
        </div>
    </div>
</form>
    <p className="text-sm">We won&apos;t pass your email address on to anyone else and you can unsubscribe at any time by clicking on the link at the bottom of the newsletter.</p>
</div>
</div>
                    <div className='md:flex-1'>
                    <img className="no-shadow"
                        src='/newsletter.png' 
                        alt="Tudor tiny house"
                    />
                    </div>
                </div>
            </div>
</div>
  );
}

