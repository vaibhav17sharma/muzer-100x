"use client"
import { useSession } from 'next-auth/react';

import StreamView from '@/components/common/StreamView';
import useRedirect from '@/hooks/useRedirect';

export default function Component() {
    const session = useSession();
    const redirect = useRedirect();
    try {
        if (!session.data?.user.id) {
            return (
                <h1>Please Log in....</h1>
            )
        }
        return <StreamView creatorId={session.data.user.id} playVideo={true} />
    } catch(e) {
        return null
    }
}

export const dynamic = 'auto'
