<template>
    <section class="inline large bg-default">
        <div class="grid gird-xs-1 grid-sm-3 fixed fixed-max-sm large">
            <h3 class="f3 text-center text-bold wrap">See how Movoto can help</h3>
            <InfoCard
                iconClass="icon-house"
                headerText="Find a Home"
                descriptionText="We support you with tools, expert guidance, and tailored resources, then connect you with an Agent."
                buttonLabel="Start Searching"
                :buttonHref="`${glb.appUrl}for-sale/`"
                buttonColor="main"
                backgroundColor="gray"
            />
            <InfoCard
                iconClass="icon-town-home"
                headerText="Find Rental"
                descriptionText="Take a deep dive and browse homes for rent to find what is right for you."
                buttonLabel="Find Rental Homes"
                :buttonHref="`${glb.appUrl}rentals/`"
                buttonColor="main"
                backgroundColor="gray"
            />
            <InfoCard
                iconClass="icon-live-connect"
                headerText="Get Help"
                descriptionText="Got questions about real estate, mortgage, agent, or renting? We're here to help."
                buttonLabel="Ask a Question"
                :buttonHref="`${glb.appUrl}faqs/`"
                buttonColor="main"
                backgroundColor="gray"
            />
        </div>
    </section>
</template>

<script src="./help-card.js"></script>
