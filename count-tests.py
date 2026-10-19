#!/usr/bin/env python3
"""Recursively count Playwright results.

The earlier script iterated d['suites'] at the top level only, so every test
inside a test.describe block was silently omitted. That undercount is where the
wrong "33 passed / 21 failed" baseline came from.
"""
import json
import sys
from collections import Counter

def walk(suites, per_file, per_project):
    for s in suites:
        for spec in s.get("specs", []):
            f = spec.get("file", "?").split("/")[-1]
            for t in spec.get("tests", []):
                status = t.get("status", "?")
                per_project[(t.get("projectName", "?"), status)] += 1
                if status == "unexpected":
                    per_file[f] += 1
                yield f, spec.get("title", ""), t.get("projectName", "?"), status
        yield from walk(s.get("suites", []), per_file, per_project)

def main():
    d = json.load(sys.stdin)
    per_file, per_project = Counter(), Counter()
    for _ in walk(d["suites"], per_file, per_project):
        pass
    total = sum(per_project.values())
    print(f"TOTAL: {total}")
    for status, n in sorted(per_project.items()):
        pass
    c = Counter()
    for (_, st), n in per_project.items():
        c[st] += n
    print("TOTALS:", dict(c))
    print("by project:")
    for (p, st), n in sorted(per_project.items()):
        print(f"  {p:18} {st:12} {n}")
    if per_file:
        print("failures by file:")
        for k, v in per_file.most_common():
            print(f"  {k:34} {v}")
    else:
        print("failures by file: none")

if __name__ == "__main__":
    main()