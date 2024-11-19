window.addEventListener("onEmbeddedMessagingReady", () => {
        console.log("Received the onEmbeddedMessagingReady event…");
    
        // Send data to Salesforce
        embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({"Brand" : "Jeep","Source" : "eShop"});
    });
function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
 
			embeddedservice_bootstrap.init(
				'00DDz000001qbuj',
				'MIAW_Test',
				'https://fcagroup--mktplace.sandbox.my.site.com/ESWMIAW1728282903975',
				{
					scrt2URL: 'https://fcagroup--mktplace.sandbox.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};

