import StreamView from "@/components/common/StreamView";

export default function Creator({
    params: {
        creatorId
    }
}: {
    params: {
        creatorId: string;
    }
}) {
    return <div>
        <StreamView creatorId={creatorId} playVideo={false} />
    </div>
}