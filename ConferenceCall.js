import { JitsiMeeting } from '@jitsi/react-sdk';

function ConferenceCall() {
    return (
        <div className="dark:bg-darkBg dark:text-darkText p-4">
            <JitsiMeeting roomName="myRoom" domain="meet.jit.si" />
        </div>
    );
}

export default ConferenceCall;