## [1.0.7](https://github.com/Achneoder/l-fen/compare/v1.0.6...v1.0.7) (2023-04-05)

### Bug Fixes

- **deps:** update dependency @google-cloud/pubsub to v3.4.1 ([2e8db01](https://github.com/Achneoder/l-fen/commit/2e8db019269b1333bf5673b22ffac10c7714436e))
- **deps:** update dependency @grpc/proto-loader to v0.7.6 ([dd33c38](https://github.com/Achneoder/l-fen/commit/dd33c3806cbc015f5b75399287ca2f548a0d2cea))
- **deps:** update dependency body-parser to v1.20.2 ([ac2482d](https://github.com/Achneoder/l-fen/commit/ac2482d1f2534d3fa0eca248d4ecd9aa200c78b3))
- **deps:** update dependency glob to v9.3.4 ([e46f8c2](https://github.com/Achneoder/l-fen/commit/e46f8c23a5d5f0e453619c3902da6803036e3213))
- **deps:** update dependency google-gax to v3.6.0 ([f62c0d4](https://github.com/Achneoder/l-fen/commit/f62c0d4f9914bb147bfe08948cf3227eadb4d5da))
- **deps:** update dependency nock to v13.3.0 ([9c27b12](https://github.com/Achneoder/l-fen/commit/9c27b1288479f77497f9640641568c1a6b3a06ea))
- **deps:** update dependency supertest to v6.3.3 ([40e653c](https://github.com/Achneoder/l-fen/commit/40e653c8176c446eacf42bb6dc2f334f99d1df9a))
- **deps:** update dependency yargs to v17.7.1 ([68e4b17](https://github.com/Achneoder/l-fen/commit/68e4b17fa58917d6289d11469e425d78c2dd76ee))

## [1.0.6](https://github.com/Achneoder/l-fen/compare/v1.0.5...v1.0.6) (2023-03-03)

### Bug Fixes

- **deps:** update dependency glob to v9 ([e553d46](https://github.com/Achneoder/l-fen/commit/e553d464eeeb23a62645c9814d05a961fe15b898))
- migrate to glob >= 9 ([039a062](https://github.com/Achneoder/l-fen/commit/039a062ef9324a15ae17e28cc954b9196ae20e19))

## [1.0.5](https://github.com/Achneoder/l-fen/compare/v1.0.4...v1.0.5) (2022-11-06)

### Bug Fixes

- **deps:** update dependency yargs to v17 ([def7789](https://github.com/Achneoder/l-fen/commit/def7789b8c29aa564c6df9a28f938c896746c116))

## [1.0.4](https://github.com/Achneoder/l-fen/compare/v1.0.3...v1.0.4) (2022-11-06)

### Bug Fixes

- **deps:** update dependency glob to v8 ([5e608e2](https://github.com/Achneoder/l-fen/commit/5e608e2e3c618d03038432e40688b832b94312cb))

## [1.0.3](https://github.com/Achneoder/l-fen/compare/v1.0.2...v1.0.3) (2022-11-01)

### Bug Fixes

- spawning bootloader from dynamic path ([cefca3e](https://github.com/Achneoder/l-fen/commit/cefca3ecef4268c067026c76d096b77e07ccedb5))

## [1.0.2](https://github.com/Achneoder/l-fen/compare/v1.0.1...v1.0.2) (2022-10-30)

### Bug Fixes

- add missing google-protobuf dependency ([2b835da](https://github.com/Achneoder/l-fen/commit/2b835daa13ef101b273a73f199012afe711fbe07))

## [1.0.1](https://github.com/Achneoder/l-fen/compare/v1.0.0...v1.0.1) (2022-10-30)

### Bug Fixes

- add shebang to bin files ([0fa0197](https://github.com/Achneoder/l-fen/commit/0fa0197b6d3cd085909a4bf562e74bf0bbd7e02f))

# 1.0.0 (2022-10-27)

### Bug Fixes

- copy build proto files to correct folder ([8a501b2](https://github.com/Achneoder/l-fen/commit/8a501b2625fc0a70f040a182ddfa10dc450eb0a6))
- **HTTP Function:** handle Functions not providing an express instance ([36a02ec](https://github.com/Achneoder/l-fen/commit/36a02ec1d29c2861e12c91b77d3c3ae3672b120a))
- **Storage:** properly handle su directories when providing events ([477fcc2](https://github.com/Achneoder/l-fen/commit/477fcc223008885752b51ccb3a08f916eeeb0811))
- **Storage:** provide proper crc32c when reading files from bucket ([efa7360](https://github.com/Achneoder/l-fen/commit/efa73604f3b0e9d5d04f166689fa35bcd1ad6ced))
- windows paths, closing finished api function ([c39c28b](https://github.com/Achneoder/l-fen/commit/c39c28b8baf50d8506c728028cbfbe1a856278c1))

### Features

- **config:** config description ([16bb340](https://github.com/Achneoder/l-fen/commit/16bb340c7722374a865b04b2eec077f09d44e43e))
- execute bucket functions ([4f2052d](https://github.com/Achneoder/l-fen/commit/4f2052d2907b28f752ebc054364f98425edd3aa4))
- **GCP/storage-api:** mocked basic storage APIs for GCP ([8a584a0](https://github.com/Achneoder/l-fen/commit/8a584a0ded4f316cb27efd64e85c4b238c4fdb64))
- **GCP:** create custom credentials ([cb6c67c](https://github.com/Achneoder/l-fen/commit/cb6c67c493b04b15878be8ab3a8dc17cc8569a61))
- **GCP:** firebase auth ([c2d1eff](https://github.com/Achneoder/l-fen/commit/c2d1effbb97f21f0ca2249f79c89a5663ea4f75e))
- **logger:** set log levels ([46bb9d4](https://github.com/Achneoder/l-fen/commit/46bb9d4300f0e5677d4a42e4c0cd6219cb66e985))
- **PubSub:** added basic gRPC publisher-server ([22eb003](https://github.com/Achneoder/l-fen/commit/22eb003ffc05ee96df6adaa3a4052e60ecadb2c4))
- **PubSub:** handle Pub/Sub functions ([3f9e6ba](https://github.com/Achneoder/l-fen/commit/3f9e6bac2315ed374a7359c38b3d553317bb4674))
