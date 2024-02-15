import MyMarquee from "../ui/Marquee";
import SponsorCard from "./SponsorCard";
import {
  brandPartners,
  colaborats,
  contractorPartners,
  drinkPartners,
  forwardPartners,
  hotelPartners,
  internetPartners,
  mediaPartners,
  organizedBy,
  ticketPartners,
  transportationPartners,
  wasteManagementPartners,
} from "./data";

const Sponsors = () => {
  return (
    <div className="px-5 lg:px-8 mt-24">
      <div className="bg-white rounded-2xl sm:rounded-3xl py-8 lg:py-12">
        <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
          <SponsorCard label="Organized by" data={organizedBy} h="h-14" />
          <SponsorCard label="Collaborating with" data={colaborats} h="h-14" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-16 my-16">
          <div className="col-span-2 sm:col-span-3 xl:col-span-2">
            <SponsorCard
              label="Official Ticketing Partner"
              data={ticketPartners}
              h="h-20"
            />
          </div>
          <SponsorCard
            label="Official Internet Partner"
            data={internetPartners}
            h="h-20"
          />
          <SponsorCard
            label="Official Contractor"
            data={contractorPartners}
            h="h-20"
          />
          <SponsorCard
            label="Official Forwarder"
            data={forwardPartners}
            h="h-20"
          />
          <SponsorCard
            label="Official Waste Management"
            data={wasteManagementPartners}
            h="h-20"
          />
          <SponsorCard
            label="Official Drink Partner"
            data={drinkPartners}
            h="h-20"
          />
          <SponsorCard
            label="Official Transportation"
            data={transportationPartners}
            h="h-20"
          />
          <SponsorCard
            label="Official Hotel Partner"
            data={hotelPartners}
            h="h-20"
          />
        </div>
        <SponsorCard label="Brand Partnership" data={brandPartners} h="h-20" />
        <div className="flex flex-col items-center text-center mt-16 w-full">
          <h4 className="font-light">Media Partners</h4>
          <MyMarquee hasText={false} data={mediaPartners} />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
