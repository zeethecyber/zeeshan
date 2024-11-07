import Image from "next/image";

type Props = {
  client: string;
  position: string;
  location: string;
  review: string;
  image: string;
};

export default function ReviewCard({
  client,
  position,
  location,
  review,
  image,
}: Props) {
  return (
    <div className="rounded-lg border border-white/35 bg-white/10 backdrop-blur-md p-4">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-white/50 shrink-0 size-14 overflow-hidden">
          <Image
            src={image}
            alt={client}
            className="object-cover size-full"
            width={48}
            height={48}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary">{client}</h3>
          <p className="font-medium">
            {position} |{" "}
            <span className="bg-secondary text-white rounded px-1">
              {location}
            </span>
          </p>
        </div>
      </div>
      <p className="mt-2 line-clamp-4">{review}</p>
    </div>
  );
}
