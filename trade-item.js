async function loadItemData() {
    try {
        const response = await fetch('item-api-response.json');
        const data = await response.json();
        const item = data.result[0].item;
        const listing = data.result[0].listing;

        // Item name/type
        document.querySelector('.header').textContent = item.name || item.typeLine;
        
        // Tags (Spell, AoE, etc)
        document.querySelector('.property').textContent = 
            item.properties[0]?.name || '';
        
        // Basic properties (Level, Cost, Cast Time)
        item.properties?.forEach(prop => {
            const value = prop.values[0]?.[0] || '';
            if (['Level', 'Cost', 'Cast Time'].includes(prop.name)) {
                document.querySelector(`.property:contains("${prop.name}:") .value`)
                    .textContent = value;
            }
        });

        // Requirements
        document.querySelector('.property:contains("Requires")').innerHTML = 
            `Requires Level <span class="value">${item.requirements[0]?.values[0][0]}</span>`;

        // Description
        document.querySelector('.desc').textContent = item.secDescrText;

        // Explicit mods
        const explicitDiv = document.querySelector('.explicit').parentElement;
        explicitDiv.innerHTML = item.explicitMods
            .map(mod => `<div class="explicit">${mod}</div>`)
            .join('');

        // Price
        document.querySelector('.itemNote').textContent = 
            `~price ${listing.price.amount} ${listing.price.currency}`;
        
    } catch (error) {
        console.error('Error:', error);
    }
}




const apiResponse = 
{
    "result": [
        {
            "id": "d38fd9578aa7f21f367c613f68bf9042a4ff449c441ed6aeab42adacf022e106",
            "listing": {
                "method": "psapi",
                "indexed": "2024-09-02T20:16:19Z",
                "stash": {
                    "name": "2",
                    "x": 1,
                    "y": 1
                },
                "whisper": "@AAWEDADD Здравствуйте, хочу купить у вас уровень 1 9% Гидросфера за 1 alch в лиге Settlers (секция \"2\"; позиция: 2 столбец, 2 ряд)",
                "whisper_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJjN2MxZTFiMTkxY2U2NTA5MmZlZWQ2YjhlZmZkNjBkZSIsImlzcyI6bnVsbCwiYXVkIjoiNTVhYTYyNzAtNGFmNy00ZGE3LWI4NmItZWEyZDQ2ZGMwMDE1IiwiZHN0IjoiQUFXRURBREQiLCJsb2MiOiJydV9SVSIsInRvayI6Iml0ZW0iLCJzdWIiOiJkMzhmZDk1NzhhYTdmMjFmMzY3YzYxM2Y2OGJmOTA0MmE0ZmY0NDljNDQxZWQ2YWVhYjQyYWRhY2YwMjJlMTA2IiwiZGF0IjoiOTlkMjI1ZjA2ZDBjZmUxYmJhYTNhZTg2ZjA4MmZiY2MiLCJpYXQiOjE3MzQ2ODkxNzAsImV4cCI6MTczNDY4OTQ3MH0.uqLw5qzQyCWNd53znKJScwq9eQiblNQRrrdp6G6y_wE",
                "account": {
                    "name": "xXLBolt#4996",
                    "online": {
                        "league": "Settlers"
                    },
                    "lastCharacterName": "AAWEDADD",
                    "language": "ru_RU",
                    "realm": "pc"
                },
                "price": {
                    "type": "~price",
                    "amount": 1,
                    "currency": "alch"
                }
            },
            "item": {
                "verified": true,
                "w": 1,
                "h": 1,
                "icon": "https://web.poecdn.com/gen/image/WzMwLDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9IeWRyb3NwaGVyZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/cf433a6596/Hydrosphere.png",
                "support": false,
                "league": "Settlers",
                "id": "d38fd9578aa7f21f367c613f68bf9042a4ff449c441ed6aeab42adacf022e106",
                "name": "",
                "typeLine": "Hydrosphere",
                "baseType": "Hydrosphere",
                "ilvl": 0,
                "identified": true,
                "note": "~price 1 alch",
                "properties": [
                    {
                        "name": "Spell, AoE, Duration, Cold, Orb, Lightning, Physical",
                        "values": [],
                        "displayMode": 0
                    },
                    {
                        "name": "Level",
                        "values": [
                            [
                                "1",
                                0
                            ]
                        ],
                        "displayMode": 0,
                        "type": 5
                    },
                    {
                        "name": "Cost",
                        "values": [
                            [
                                "12 Mana",
                                0
                            ]
                        ],
                        "displayMode": 0
                    },
                    {
                        "name": "Cast Time",
                        "values": [
                            [
                                "0.60 sec",
                                0
                            ]
                        ],
                        "displayMode": 0
                    },
                    {
                        "name": "Critical Strike Chance",
                        "values": [
                            [
                                "5.00%",
                                0
                            ]
                        ],
                        "displayMode": 0
                    },
                    {
                        "name": "Effectiveness of Added Damage",
                        "values": [
                            [
                                "65%",
                                0
                            ]
                        ],
                        "displayMode": 0
                    },
                    {
                        "name": "Quality",
                        "values": [
                            [
                                "+9%",
                                1
                            ]
                        ],
                        "displayMode": 0,
                        "type": 6
                    }
                ],
                "requirements": [
                    {
                        "name": "Level",
                        "values": [
                            [
                                "34",
                                0
                            ]
                        ],
                        "displayMode": 0,
                        "type": 62
                    },
                    {
                        "name": "Int",
                        "values": [
                            [
                                "79",
                                0
                            ]
                        ],
                        "displayMode": 1,
                        "type": 65
                    }
                ],
                "additionalProperties": [
                    {
                        "name": "Experience",
                        "values": [
                            [
                                "1/252595",
                                0
                            ]
                        ],
                        "displayMode": 2,
                        "progress": 0,
                        "type": 20
                    }
                ],
                "secDescrText": "Create a sphere of water, or move an existing sphere and reset its duration. The sphere continually applies a drenched debuff with a short duration to enemies in its area or those it moves through. You can hit the sphere with other skills to inflict Cold and Lightning Ailments (other than Chill). The sphere pulses when created, at regular intervals while afflicted by an Ailment, and after moving, damaging all drenched enemies in a large area.",
                "explicitMods": [
                    "Deals 37 to 56 Physical Damage",
                    "Base duration is 8.00 seconds",
                    "Base secondary duration is 4.00 seconds",
                    "Pulses every 0.4 seconds while Frozen, Shocked, Brittle or Sapped",
                    "4% increased Pulse Frequency",
                    "Can only be Hit once every 1 second",
                    "Drenched Enemies have Cold and Lightning Exposure, applying -10% to Resistances",
                    "100% of Physical Damage Converted to Cold Damage while Sphere has no Ailments\n100% of Physical Damage Converted to Lightning Damage while sphere is Shocked or Sapped\n100% of Physical Damage Converted to Cold Damage while Sphere is Frozen or Brittle"
                ],
                "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                "frameType": 4,
                "extended": {
                    "text": "SXRlbSBDbGFzczogU2tpbGwgR2Vtcw0KUmFyaXR5OiBHZW0NCkh5ZHJvc3BoZXJlDQotLS0tLS0tLQ0KU3BlbGwsIEFvRSwgRHVyYXRpb24sIENvbGQsIE9yYiwgTGlnaHRuaW5nLCBQaHlzaWNhbA0KTGV2ZWw6IDENCkNvc3Q6IDEyIE1hbmENCkNhc3QgVGltZTogMC42MCBzZWMNCkNyaXRpY2FsIFN0cmlrZSBDaGFuY2U6IDUuMDAlDQpFZmZlY3RpdmVuZXNzIG9mIEFkZGVkIERhbWFnZTogNjUlDQpRdWFsaXR5OiArOSUgKGF1Z21lbnRlZCkNCi0tLS0tLS0tDQpSZXF1aXJlbWVudHM6DQpMZXZlbDogMzQNCkludDogNzkNCi0tLS0tLS0tDQpDcmVhdGUgYSBzcGhlcmUgb2Ygd2F0ZXIsIG9yIG1vdmUgYW4gZXhpc3Rpbmcgc3BoZXJlIGFuZCByZXNldCBpdHMgZHVyYXRpb24uIFRoZSBzcGhlcmUgY29udGludWFsbHkgYXBwbGllcyBhIGRyZW5jaGVkIGRlYnVmZiB3aXRoIGEgc2hvcnQgZHVyYXRpb24gdG8gZW5lbWllcyBpbiBpdHMgYXJlYSBvciB0aG9zZSBpdCBtb3ZlcyB0aHJvdWdoLiBZb3UgY2FuIGhpdCB0aGUgc3BoZXJlIHdpdGggb3RoZXIgc2tpbGxzIHRvIGluZmxpY3QgQ29sZCBhbmQgTGlnaHRuaW5nIEFpbG1lbnRzIChvdGhlciB0aGFuIENoaWxsKS4gVGhlIHNwaGVyZSBwdWxzZXMgd2hlbiBjcmVhdGVkLCBhdCByZWd1bGFyIGludGVydmFscyB3aGlsZSBhZmZsaWN0ZWQgYnkgYW4gQWlsbWVudCwgYW5kIGFmdGVyIG1vdmluZywgZGFtYWdpbmcgYWxsIGRyZW5jaGVkIGVuZW1pZXMgaW4gYSBsYXJnZSBhcmVhLg0KLS0tLS0tLS0NCkRlYWxzIDM3IHRvIDU2IFBoeXNpY2FsIERhbWFnZQ0KQmFzZSBkdXJhdGlvbiBpcyA4LjAwIHNlY29uZHMNCkJhc2Ugc2Vjb25kYXJ5IGR1cmF0aW9uIGlzIDQuMDAgc2Vjb25kcw0KUHVsc2VzIGV2ZXJ5IDAuNCBzZWNvbmRzIHdoaWxlIEZyb3plbiwgU2hvY2tlZCwgQnJpdHRsZSBvciBTYXBwZWQNCjQlIGluY3JlYXNlZCBQdWxzZSBGcmVxdWVuY3kNCkNhbiBvbmx5IGJlIEhpdCBvbmNlIGV2ZXJ5IDEgc2Vjb25kDQpEcmVuY2hlZCBFbmVtaWVzIGhhdmUgQ29sZCBhbmQgTGlnaHRuaW5nIEV4cG9zdXJlLCBhcHBseWluZyAtMTAlIHRvIFJlc2lzdGFuY2VzDQoxMDAlIG9mIFBoeXNpY2FsIERhbWFnZSBDb252ZXJ0ZWQgdG8gQ29sZCBEYW1hZ2Ugd2hpbGUgU3BoZXJlIGhhcyBubyBBaWxtZW50cwoxMDAlIG9mIFBoeXNpY2FsIERhbWFnZSBDb252ZXJ0ZWQgdG8gTGlnaHRuaW5nIERhbWFnZSB3aGlsZSBzcGhlcmUgaXMgU2hvY2tlZCBvciBTYXBwZWQKMTAwJSBvZiBQaHlzaWNhbCBEYW1hZ2UgQ29udmVydGVkIHRvIENvbGQgRGFtYWdlIHdoaWxlIFNwaGVyZSBpcyBGcm96ZW4gb3IgQnJpdHRsZQ0KLS0tLS0tLS0NCkV4cGVyaWVuY2U6IDEvMjUyNTk1DQotLS0tLS0tLQ0KUGxhY2UgaW50byBhbiBpdGVtIHNvY2tldCBvZiB0aGUgcmlnaHQgY29sb3VyIHRvIGdhaW4gdGhpcyBza2lsbC4gUmlnaHQgY2xpY2sgdG8gcmVtb3ZlIGZyb20gYSBzb2NrZXQuDQotLS0tLS0tLQ0KTm90ZTogfnByaWNlIDEgYWxjaA0K"
                }
            }
        }
    ]
};