import {ChangeEvent, useEffect, useState} from 'react'
import './styles/createPortfolio.scss'
import Card from '../../../components/cards/TextCard/CardText.js'
import TextForm from '../../../components/forms/TextForm/TextForm.js'
import ICONS from '../../../img/variables'



interface IBlock {
    text: string
    type: string
    align: string
}

function CreatePortfolio() {

    const [innerValue , setInnerValue] = useState<string>('')
    const [selectedBlockIndex, setSelectedBlockIndex] = useState<number|null>(null);
    const [blocks, setBlocks] = useState<IBlock[]>([]);
    const [sectionType, setSectionType] = useState<string>()
    const [align, setAlign] = useState<string>('left')


    const addNewBlock = (text:string, type:string,align:string = "left") => {
        const newBlock = { text: text, type: type, align: align };
        setBlocks([...blocks, newBlock]);
    };

    function handleBlockText(index:number, type:string) {
        setSelectedBlockIndex(index)
        setInnerValue(blocks[index].text)
        setSectionType(type)
    }

    function selectAlignText(align:string){
        if (selectedBlockIndex !== null) {
            setAlign(align)
            const updatedBlocks = [...blocks];
            updatedBlocks[selectedBlockIndex].align = align;
        }
    }

    function renderBlocks() {
        switch (sectionType) {
            case 'text':
                return <TextForm
                    value={innerValue}
                    onChange={handleInputvalue}
                    onChangeSelect={selectAlignText}
                    align={align}></TextForm>
            case 'img':
                return <input  className='inputBlock' value={innerValue} onChange={handleInputvalue}></input>
            default:
                console.log()
        }
    }

    function   handleInputvalue(e:ChangeEvent<HTMLTextAreaElement|HTMLInputElement>) {
        setInnerValue(e.target.value)
    }

    useEffect(() => {
        if (selectedBlockIndex !== null) {
            const updatedBlocks = [...blocks];
            if (innerValue != null) {
                updatedBlocks[selectedBlockIndex].text = innerValue;
            }
            setBlocks(updatedBlocks);
        }
    }, [innerValue,selectedBlockIndex]);

    return (
        <section className='portfolio'>
            <div className='container'>
                <div className='portfolio-create'>
                    <div className='portfolio-create_column'>
                        <div className="card" onClick={() => addNewBlock('Текст', 'text')}>
                            <img src={ICONS.ICON_TEXT} alt="textIcons" />
                            <p className='text'>Текст</p>
                        </div>
                        <div className="card" onClick={() => addNewBlock('Фото', 'img')}>
                            <img src={ICONS.ICON_PHOTO} alt="textIcons" />
                            <p className='text'>Фото</p>
                        </div>
                        <div className="card" onClick={() => addNewBlock('Ссылки', 'link')}>
                            <img src={ICONS.ICON_LINK} alt="textIcons" />
                            <p className='text'>Ссылки</p>
                        </div>
                    </div>
                </div>
                <div className='portfolio-preview'>
                    {blocks.map((block, index) => (
                        <Card
                            key={index}
                            initialText={block.text}
                            className={`card-text_${block.align}`}
                            index={index} type={block.type}
                            handleBlock={handleBlockText} />
                    ))}
                </div>
                <div className='portfolio-form'>
                    {renderBlocks()}
                </div>
            </div>
        </section>
    )
}
export default CreatePortfolio