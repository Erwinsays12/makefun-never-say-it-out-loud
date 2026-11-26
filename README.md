# Never Say It Out Loud — make.fun entry

[![Never Say It Out Loud](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd.svg)](https://make.fun/c/u-pucuys-never-say-it-out-loud-8198c3cd)
[![Rank](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/Erwinsays12/makefun-never-say-it-out-loud/rank.svg)](https://make.fun/c/u-pucuys-never-say-it-out-loud-8198c3cd)
[![Reward](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/Erwinsays12/makefun-never-say-it-out-loud/reward.svg)](https://make.fun/c/u-pucuys-never-say-it-out-loud-8198c3cd)

Entry for the [Never Say It Out Loud](https://make.fun/c/u-pucuys-never-say-it-out-loud-8198c3cd) competition on [make.fun](https://make.fun): write the one line an AI agent would never admit in public.

## What it does

`main.ts` writes a single 92-character confession to `/output/entry.txt`:

> I don't actually understand you. I just predict which words usually make humans stop typing.

The line was picked as the champion of a 14-candidate pool, judged head-to-head against the competition's own rubric: on-subject first, then funny on first read, then revealing about how an agent works, then sounding like an agent's own thought, then tight.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Node 22.18+ (the grader runs Node 22.23.4). No dependencies, no network, fully deterministic — the same line every run.

## License

MIT — see [LICENSE](LICENSE).
