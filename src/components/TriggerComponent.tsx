'use client'

import { useState } from "react"
import MainComponent from "./MainComponent"

export default function TriggerComponent() {
    const [triggerShow, setTriggerShow] = useState(true)
    const [mainShow, setMainShow] = useState(false)
    const [q1, setQ1] = useState('')
    const [q2, setQ2] = useState('')
    const [q3, setQ3] = useState('')
    const [wrongAnswer, setWrongAnswer] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(false)

    function handleClick() {
        setTriggerShow(false)
        setMainShow(true)
        const song = document.getElementById("song") as HTMLAudioElement | null
        song?.play()
    }

    function handleQ1(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setQ1(value);
    }

    function handleQ2(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setQ2(value);
    }
    function handleQ3(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setQ3(value);
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(q1, q2, q3)
        if (q1 === 'kuning' && q2 === 'sarung tangan' && q3 === 'duit') {
            setCorrectAnswer(true)
        } else {
            setWrongAnswer(true)
        }

    }

    return (
        <>
            {!correctAnswer &&
                <div className="flex justify-center items-center h-screen flex-col">
                    <h1 className="text-2xl">Jawab ini dulu Win</h1>
                    <form onSubmit={handleSubmit}>
                        {/* tailwind input */}
                        <p>{wrongAnswer && 'ada jawaban yang salah, kamu bukan wiwin'}</p>
                        <div className="mb-3">
                            <label htmlFor="">Apa warna kesukaan Wiwin?</label>
                            <div>
                                <input type="radio" name="color" className="border-2 border-gray-300 rounded-md p-2" value="merah" id="merah" onChange={handleQ1} /><label htmlFor="merah">Merah</label>
                            </div>
                            <div>
                                <input type="radio" name="color" className="border-2 border-gray-300 rounded-md p-2" value="kuning" id="kuning" onChange={handleQ1} /><label htmlFor="kuning">Kuning</label>
                            </div>
                            <div>
                                <input type="radio" name="color" className="border-2 border-gray-300 rounded-md p-2" value="hijau" id="hijau" onChange={handleQ1} /><label htmlFor="hijau">Hijau</label>
                            </div>
                            <div>
                                <input type="radio" name="color" className="border-2 border-gray-300 rounded-md p-2" value="di langit yang biru" id="biru" onChange={handleQ1} /><label htmlFor="biru">di langit yang biru</label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Wiwin makan udang pakai?</label>
                            <div>
                                <input type="radio" name="makan" className="border-2 border-gray-300 rounded-md p-2" value="kecap" id="kecap" onChange={handleQ2} /><label htmlFor="kecap">Kecap</label>
                            </div>
                            <div>
                                <input type="radio" name="makan" className="border-2 border-gray-300 rounded-md p-2" value="sambal" id="sambal" onChange={handleQ2} /><label htmlFor="sambal">Sambal</label>
                            </div>
                            <div>
                                <input type="radio" name="makan" className="border-2 border-gray-300 rounded-md p-2" value="sarung tangan" id="sarung tangan" onChange={handleQ2} /><label htmlFor="sarung tangan">Sarung Tangan</label>
                            </div>
                            <div>
                                <input type="radio" name="makan" className="border-2 border-gray-300 rounded-md p-2" value="hati" id="hati" onChange={handleQ2} /><label htmlFor="hati">Hati</label>
                            </div>
                        </div>



                        <div className="mb-3">
                            <label htmlFor="">Wiwin dan Sri Mulyani sama sama ngurus?</label>
                            <div>
                                <input type="radio" name="ngurus" className="border-2 border-gray-300 rounded-md p-2" value="kepala daerah" id="kepala daerah" onChange={handleQ3} /><label htmlFor="kepala daerah">Kepala Daerah</label>
                            </div>
                            <div>
                                <input type="radio" name="ngurus" className="border-2 border-gray-300 rounded-md p-2" value="komisaris bumn" id="komisaris bumn" onChange={handleQ3} /><label htmlFor="komisaris bumn">Komisaris BUMN</label>
                            </div>
                            <div>
                                <input type="radio" name="ngurus" className="border-2 border-gray-300 rounded-md p-2" value="duit" id="duit" onChange={handleQ3} /><label htmlFor="duit">Duit</label>
                            </div>
                            <div>
                                <input type="radio" name="ngurus" className="border-2 border-gray-300 rounded-md p-2" value="all you can eat" id="all you can eat" onChange={handleQ3} /><label htmlFor="all you can eat">All you can eat 😂</label>
                            </div>
                        </div>

                        <input type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full" />
                    </form>
                </div>}


            {correctAnswer && triggerShow && <div className="flex justify-center items-center h-screen">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full text-3xl" onClick={handleClick} >Klik di sini Win</button>
            </div>}
            {mainShow && <MainComponent />}
            <audio src="/hbd.mp3" id="song" loop />

        </>
    )
}