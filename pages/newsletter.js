import Head from 'next/head'


export default function NewsletterPage({ }) {
  return (
        <div>
            <Head>
                <title>Exeter Tiny House Community | About Us</title>
                <meta name="description" content="About | Exeter Tiny House Community | Creating a community of tiny homes in or around Exeter in Devon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


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
		<div className="response" id="mce-error-response" className="hidden"></div>
		<div className="response" id="mce-success-response" className="hidden"></div>
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
</div>
</div>
  );
}

