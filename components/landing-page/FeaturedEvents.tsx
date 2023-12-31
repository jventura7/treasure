import createSupabaseServerClient from "@/utils/supabase/server";
import FeaturedEventDisplay from "./FeaturedEventDisplay";
import { Button } from "@/components/ui/button";

export default async function FeaturedEvents() {
  const supabase = await createSupabaseServerClient();
  const { data: events, error: eventsError } = await supabase
    .from("events")
    .select("*")
    .limit(4);

  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl mb-4 text-center md:text-5xl">
        Featured Events
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {events?.map((event) => (
          <FeaturedEventDisplay key={event.id} event={event} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Button className="landing-page-button max-w-lg w-full md:w-80 mt-6">
          See All Events
        </Button>
      </div>
    </div>
  );
}
