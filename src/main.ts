import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzM0MzUyMDU4LCJzdWIiOiJjNmVkMDY5Ni1kNGZmLTRiN2QtOWMzZi0wODYzNTA2OTNhN2N-U1RBR0lOR342MjdhZjljMy0yYzBhLTRjNzktOGRkZi1lOGFjYjk3MmVlMTMifQ.MwkfYJiPe1CB8qJix_8gpC6BD_KVMi7ba7LLh8XHVkk',
  });
  const liveRenderTarget = document.getElementById(
    'canvas_snap'
  ) as HTMLCanvasElement;
  const session = await cameraKit.createSession({ liveRenderTarget });
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    'aabd69dc-cc5a-4a8d-b612-67c240b688cd',
    '191fa27c-0faf-44e6-b871-fbf4f99d69aa'
  );

  await session.applyLens(lens);
})();