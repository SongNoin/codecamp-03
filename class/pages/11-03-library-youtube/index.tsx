import ReactPlayer from "react-player";
import styled from "@emotion/styled";

const MyYoutube = styled(ReactPlayer)`
  border: 3px solid yellow;
`;

export default function LibraryYoutubePage() {
  return (
    <MyYoutube
      url="https://www.youtube.com/watch?v=J1gRHosqoVA"
      width={800}
      height={600}
      muted={true}
      playing={true}
    />
  );
}
