"use client";
import "./CategoryDetails.css";
import { useRouter } from "next/navigation";
import { Company, Category, Drink } from "@/Components/Types/types";
import { useState, useEffect } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { companyDetails } from "@/data/drinksData";
import { Image } from 'antd';

export default function Page({ params }: any) {
  const { TabPane } = Tabs;
  const router = useRouter();
  const [company] = useState<any>(companyDetails);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(company.categories[0]);
  const [selectedFoodCategory, setSelectedFoodCategory] = useState(company.foodMenu[0]);
  const [activeTabKey, setActiveTabKey] = useState<string>();

  useEffect(() => {
    if (params.id === 'drinks') {
      setActiveTabKey('31');
    } else {
      setActiveTabKey('31')
    }
  }, [params.id]);

  const handleCategoryTabChange = (key: string) => {
    console.log(key);
    setActiveTabKey(key);
    // @ts-ignore
    setSelectedCategory(companyDetails.categories.find((category) => category.id === Number(key)))
};

const handleFoodTabChange = (key: string) => {
  console.log(key);
  setActiveTabKey(key);
  setSelectedFoodCategory(companyDetails.foodMenu.find((food) => food.id === Number(key)))
};

  const onBackClick = () => {
    router.push(`/menu`);
  };

  return (
    <div className="categoryDetailsPageWrapper">
      <div className="menuPageHeader">
        <div className="headingName">
          <LeftOutlined onClick={onBackClick} />
          <h3>Maxim Caffee</h3>
        </div>
      </div>

      <div className="categoryDetailsMain">
        <h2 className="categoryText">Menu</h2>
        {params.id === 'drinks' ? (
          <Tabs activeKey={activeTabKey} onChange={handleCategoryTabChange}>
            {company?.categories.map((category: any) => (
              <TabPane tab={category.name} key={category.id.toString()}>
                <div className="categoryDrinksList"
                >
                  {selectedCategory?.drinks.map((drink: Drink) =>
                    <div className="categoryDrink" key={drink.id}>
                      <Image src={drink.image} alt="drink Image" width={100} style={{ height: '57px', objectFit: 'cover' }} />
                      <div className="categoryDrinkInfo">
                        <h3>{drink.name}</h3>
                        <p>{drink.price} дeн</p>
                      </div>
                    </div>
                  )}
                </div>
              </TabPane>
            ))}
          </Tabs>
        ) : (
          <Tabs activeKey={activeTabKey} onChange={handleFoodTabChange}>
            {company?.foodMenu.map((category: any) => (
              <TabPane tab={category.name} key={category.id.toString()}>
                <div className="categoryDrinksList"
                >
                  {selectedFoodCategory?.foods.map((drink: Drink) =>
                   <div className="foodItem" key={drink.id} style={{ display: 'flex', alignItems: 'center' }}>
                   <div>
                       <Image src={drink.image} alt="drink Image" width={80} style={{ minWidth: '90px', height: '120px', objectFit: 'cover', borderRadius: '12px' }} />
                   </div>
                   <div className="footItemInfo">
                       <h3>{drink.name}</h3>
                       <p>{drink.description}</p>
                   </div>
                   <div style={{ textAlign: 'center' }}>
                       <p className="foodPrice">{drink.price} дeн</p>
                   </div>
               </div>
               
                  )}
                </div>
              </TabPane>
            ))}
          </Tabs>
        )}

      </div>
      <div className="ladningPageFooter">
        <p>© 2023 Maxim Coffee. All rights reserved.</p>
      </div>
    </div>
  );
}
